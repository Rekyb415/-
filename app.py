import random
from PyQt6.QtWidgets import (
    QMainWindow, QWidget, QVBoxLayout, QHBoxLayout,
    QPushButton, QLabel, QFrame, QStackedWidget,
    QScrollArea, QGridLayout, QMessageBox, QProgressBar
)
from PyQt6.QtCore import Qt
from PyQt6.QtGui import QIcon

from data import POLYPHONES
from logo import create_logo_pixmap
import stats as Stats

# ── Palette ────────────────────────────────────────────────────
RED      = "#c0392b"
DARK_RED = "#7b0000"
GOLD     = "#f5c518"
CREAM    = "#fdf6e3"
DARK     = "#1a1a2e"
GRAY     = "#6c757d"
GREEN    = "#27ae60"
ORANGE   = "#e67e22"
WHITE    = "#ffffff"
BLUE     = "#2980b9"
PURPLE   = "#8e44ad"

DIFF_COLORS = {1: GREEN, 2: ORANGE, 3: RED}
DIFF_LABELS = {1: "初级 Beginner", 2: "中级 Intermediate", 3: "高级 Advanced"}
DIFF_DESC   = {
    1: "基础汉字  HSK 1-3\nBasic everyday characters",
    2: "进阶汉字  HSK 4-5\nIntermediate characters",
    3: "高级汉字  文言文\nAdvanced & literary characters",
}
FREQ_COLORS = {"high": GREEN, "medium": ORANGE, "low": GRAY}
FREQ_LABELS = {"high": "常用 High", "medium": "偶用 Medium", "low": "少用 Low"}


def styled_btn(text, color=RED, text_color=WHITE, font_size=14, padding="10px 20px"):
    btn = QPushButton(text)
    btn.setStyleSheet(f"""
        QPushButton {{
            background-color: {color};
            color: {text_color};
            border: none;
            border-radius: 8px;
            padding: {padding};
            font-size: {font_size}px;
            font-weight: bold;
        }}
        QPushButton:hover {{ background-color: {color}cc; }}
        QPushButton:pressed {{ background-color: {color}88; }}
    """)
    return btn


def build_distractors(correct_pinyin: str, char_entry: dict, n: int = 3) -> list:
    """
    Smart distractor selection:
    1. First fill from OTHER readings of the SAME character (hardest — same char, diff tone)
    2. Then fill from readings of characters that SHARE the same base syllable (e.g. xing vs xíng)
    3. Finally random from the full pool
    """
    result = []
    seen = {correct_pinyin}

    # 1. Other readings of the same character
    for r in char_entry["readings"]:
        if r["pinyin"] not in seen:
            result.append(r["pinyin"])
            seen.add(r["pinyin"])

    # 2. Same base syllable (strip tone number) from other chars
    def base(p):
        return p.translate(str.maketrans("āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ",
                                         "aaaaeeeeiiiioooouuuuuuuu"))
    correct_base = base(correct_pinyin)
    similar = [
        r["pinyin"] for p in POLYPHONES for r in p["readings"]
        if r["pinyin"] not in seen and base(r["pinyin"]) == correct_base
    ]
    random.shuffle(similar)
    for p in similar:
        if len(result) >= n:
            break
        result.append(p)
        seen.add(p)

    # 3. Random fill
    if len(result) < n:
        rest = [r["pinyin"] for p in POLYPHONES for r in p["readings"] if r["pinyin"] not in seen]
        random.shuffle(rest)
        for p in rest:
            if len(result) >= n:
                break
            result.append(p)
            seen.add(p)

    return result[:n]


# ══════════════════════════════════════════════════════════════
# HOME SCREEN
# ══════════════════════════════════════════════════════════════
class HomeScreen(QWidget):
    def __init__(self, parent=None):
        super().__init__(parent)
        self._build_ui()

    def _build_ui(self):
        layout = QVBoxLayout(self)
        layout.setAlignment(Qt.AlignmentFlag.AlignCenter)
        layout.setSpacing(18)

        logo_label = QLabel()
        logo_label.setPixmap(create_logo_pixmap(96))
        logo_label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        layout.addWidget(logo_label)

        title = QLabel("多音字练习")
        title.setAlignment(Qt.AlignmentFlag.AlignCenter)
        title.setStyleSheet(f"font-size: 36px; font-weight: bold; color: {RED};")
        layout.addWidget(title)

        subtitle = QLabel("Polyphonic Chinese Characters")
        subtitle.setAlignment(Qt.AlignmentFlag.AlignCenter)
        subtitle.setStyleSheet(f"font-size: 15px; color: {GRAY}; font-style: italic;")
        layout.addWidget(subtitle)

        layout.addSpacing(10)

        self.btn_quiz   = styled_btn("开始测验  Start Quiz",   RED,    WHITE, 15, "14px 40px")
        self.btn_flash  = styled_btn("闪卡练习  Flashcards",   PURPLE, WHITE, 14, "12px 40px")
        self.btn_browse = styled_btn("浏览词库  Browse",       DARK,   WHITE, 14, "12px 40px")
        self.btn_stats  = styled_btn("我的成绩  My Stats",     BLUE,   WHITE, 14, "12px 40px")
        layout.addWidget(self.btn_quiz,   alignment=Qt.AlignmentFlag.AlignCenter)
        layout.addSpacing(6)
        layout.addWidget(self.btn_flash,  alignment=Qt.AlignmentFlag.AlignCenter)
        layout.addSpacing(6)
        layout.addWidget(self.btn_browse, alignment=Qt.AlignmentFlag.AlignCenter)
        layout.addSpacing(6)
        layout.addWidget(self.btn_stats,  alignment=Qt.AlignmentFlag.AlignCenter)

        total = len(POLYPHONES)
        b = sum(1 for c in POLYPHONES if c["difficulty"] == 1)
        i = sum(1 for c in POLYPHONES if c["difficulty"] == 2)
        a = sum(1 for c in POLYPHONES if c["difficulty"] == 3)
        stats = QLabel(f"词库 {total} 字  ·  初级 {b}  中级 {i}  高级 {a}")
        stats.setAlignment(Qt.AlignmentFlag.AlignCenter)
        stats.setStyleSheet(f"font-size: 12px; color: {GRAY};")
        layout.addSpacing(8)
        layout.addWidget(stats)


# ══════════════════════════════════════════════════════════════
# LEVEL SELECT SCREEN
# ══════════════════════════════════════════════════════════════
class LevelSelectScreen(QWidget):
    def __init__(self, parent=None):
        super().__init__(parent)
        self.selected_level = None
        self._build_ui()

    def _build_ui(self):
        layout = QVBoxLayout(self)
        layout.setAlignment(Qt.AlignmentFlag.AlignCenter)
        layout.setSpacing(20)
        layout.setContentsMargins(40, 30, 40, 30)

        back_row = QHBoxLayout()
        self.btn_back = styled_btn("← 返回 Back", DARK, WHITE, 12, "8px 16px")
        back_row.addWidget(self.btn_back)
        back_row.addStretch()
        layout.addLayout(back_row)

        layout.addSpacing(10)

        title = QLabel("选择难度  Choose Level")
        title.setAlignment(Qt.AlignmentFlag.AlignCenter)
        title.setStyleSheet(f"font-size: 22px; font-weight: bold; color: {DARK};")
        layout.addWidget(title)

        layout.addSpacing(6)

        # ── Question count selector ──
        count_frame = QFrame()
        count_frame.setStyleSheet(f"QFrame{{background:{WHITE};border-radius:10px;border:1px solid #dee2e6;padding:4px;}}")
        cf = QVBoxLayout(count_frame)
        cf.setSpacing(6)
        qlbl = QLabel("每次题数  Questions per session")
        qlbl.setStyleSheet(f"font-size:12px;color:{GRAY};font-weight:bold;")
        qlbl.setAlignment(Qt.AlignmentFlag.AlignCenter)
        cf.addWidget(qlbl)
        btn_row = QHBoxLayout()
        btn_row.setSpacing(8)
        self._count_btns = []
        self.selected_count = 10
        for n, lbl in [(10,"10"),(20,"20"),(30,"30"),(0,"∞")]:
            b = QPushButton(lbl)
            b.setCheckable(True)
            b.setChecked(n == 10)
            b.setStyleSheet(f"""
                QPushButton{{background:{CREAM};color:{DARK};border:2px solid #dee2e6;
                    border-radius:8px;padding:6px 18px;font-size:15px;font-weight:bold;}}
                QPushButton:checked{{background:{RED};color:white;border-color:{RED};}}
                QPushButton:hover{{border-color:{RED};}}
            """)
            b.clicked.connect(lambda _, nv=n: self._set_count(nv))
            btn_row.addWidget(b)
            self._count_btns.append((n, b))
        cf.addLayout(btn_row)
        layout.addWidget(count_frame)

        layout.addSpacing(6)

        # Level cards
        self.level_btns = {}
        for d in [0, 1, 2, 3]:
            card = self._make_level_card(d)
            layout.addWidget(card)

    def _make_level_card(self, d):
        frame = QFrame()
        color = DIFF_COLORS.get(d, BLUE)
        if d == 0:
            color = BLUE
        frame.setStyleSheet(f"""
            QFrame {{
                background: white;
                border: 2px solid {color}66;
                border-left: 5px solid {color};
                border-radius: 10px;
                padding: 4px;
            }}
            QFrame:hover {{ background: {color}11; }}
        """)
        frame.setCursor(Qt.CursorShape.PointingHandCursor)

        row = QHBoxLayout(frame)
        row.setContentsMargins(12, 10, 12, 10)

        left = QVBoxLayout()
        if d == 0:
            name = QLabel("全部  All Levels")
            desc = QLabel("混合所有难度  Mix of all difficulties")
            count = len(POLYPHONES)
        else:
            name = QLabel(DIFF_LABELS[d])
            desc = QLabel(DIFF_DESC[d])
            count = sum(1 for c in POLYPHONES if c["difficulty"] == d)

        name.setStyleSheet(f"font-size: 15px; font-weight: bold; color: {color};")
        desc.setStyleSheet(f"font-size: 11px; color: {GRAY};")
        left.addWidget(name)
        left.addWidget(desc)

        count_lbl = QLabel(f"{count}\n字")
        count_lbl.setAlignment(Qt.AlignmentFlag.AlignCenter)
        count_lbl.setStyleSheet(f"font-size: 18px; font-weight: bold; color: {color}; min-width: 40px;")

        row.addLayout(left, 1)
        row.addWidget(count_lbl)

        # Make whole card clickable via button overlay trick
        btn = QPushButton()
        btn.setFlat(True)
        btn.setStyleSheet("QPushButton { background: transparent; border: none; }")
        btn.clicked.connect(lambda _, dv=d: self._on_select(dv))

        # Stack button over frame using absolute positioning workaround
        frame.mousePressEvent = lambda e, dv=d: self._on_select(dv)

        self.level_btns[d] = frame
        return frame

    def _set_count(self, n):
        self.selected_count = n
        for nv, b in self._count_btns:
            b.setChecked(nv == n)

    def _on_select(self, d):
        self.selected_level = d
        if hasattr(self, 'on_level_selected'):
            self.on_level_selected(d, self.selected_count)


# ══════════════════════════════════════════════════════════════
# QUIZ SCREEN
# ══════════════════════════════════════════════════════════════
class QuizScreen(QWidget):
    def __init__(self, parent=None):
        super().__init__(parent)
        self.score = 0
        self.total = 0
        self.session_limit = 10   # 0 = unlimited
        self.current_char = None
        self.correct_pinyin = None
        self.options = []
        self.difficulty = 0
        self.on_session_done = None  # callback(score, total, difficulty)
        self._build_ui()

    def _build_ui(self):
        layout = QVBoxLayout(self)
        layout.setContentsMargins(24, 16, 24, 16)
        layout.setSpacing(12)

        # ── Top bar ──
        top = QHBoxLayout()
        self.btn_back = styled_btn("← 返回 Back", DARK, WHITE, 12, "8px 14px")
        self.level_badge = QLabel("")
        self.level_badge.setStyleSheet(f"font-size:12px; color:white; background:{BLUE}; border-radius:5px; padding:3px 10px; font-weight:bold;")
        self.score_label = QLabel("0 / 0")
        self.score_label.setStyleSheet(f"font-size: 15px; color: {DARK}; font-weight: bold;")
        top.addWidget(self.btn_back)
        top.addSpacing(8)
        top.addWidget(self.level_badge)
        top.addStretch()
        top.addWidget(self.score_label)
        layout.addLayout(top)

        # ── Progress bar ──
        self.progress_bar = QProgressBar()
        self.progress_bar.setMinimum(0)
        self.progress_bar.setMaximum(10)
        self.progress_bar.setValue(0)
        self.progress_bar.setTextVisible(False)
        self.progress_bar.setFixedHeight(8)
        self.progress_bar.setStyleSheet(f"""
            QProgressBar {{
                background-color: #dee2e6;
                border-radius: 4px;
                border: none;
            }}
            QProgressBar::chunk {{
                background: qlineargradient(x1:0,y1:0,x2:1,y2:0,
                    stop:0 {RED}, stop:1 {GOLD});
                border-radius: 4px;
            }}
        """)
        layout.addWidget(self.progress_bar)

        # ── Progress text ──
        self.progress_lbl = QLabel("")
        self.progress_lbl.setAlignment(Qt.AlignmentFlag.AlignCenter)
        self.progress_lbl.setStyleSheet(f"font-size:11px;color:{GRAY};")
        layout.addWidget(self.progress_lbl)

        # ── Character card ──
        char_frame = QFrame()
        char_frame.setStyleSheet(f"""
            QFrame {{
                background: qlineargradient(x1:0,y1:0,x2:1,y2:1,
                    stop:0 {RED}, stop:1 {DARK_RED});
                border-radius: 16px;
            }}
        """)
        cf = QVBoxLayout(char_frame)
        cf.setSpacing(4)

        badges = QHBoxLayout()
        badges.addStretch()
        self.diff_badge = QLabel("")
        self.diff_badge.setStyleSheet(f"font-size:10px;color:white;background:{GREEN};border-radius:4px;padding:2px 8px;")
        self.freq_badge = QLabel("")
        self.freq_badge.setStyleSheet(f"font-size:10px;color:white;background:{BLUE};border-radius:4px;padding:2px 8px;")
        badges.addWidget(self.diff_badge)
        badges.addSpacing(4)
        badges.addWidget(self.freq_badge)
        badges.addStretch()
        cf.addLayout(badges)

        self.char_label = QLabel("字")
        self.char_label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        self.char_label.setStyleSheet(f"font-size:88px;color:{GOLD};font-weight:bold;padding:6px 0;")
        cf.addWidget(self.char_label)

        self.context_label = QLabel("")
        self.context_label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        self.context_label.setStyleSheet(f"font-size:13px;color:{CREAM};padding-bottom:10px;")
        self.context_label.setWordWrap(True)
        cf.addWidget(self.context_label)

        layout.addWidget(char_frame)

        # ── Hint: "same character, different reading" warning ──
        self.hint_label = QLabel("")
        self.hint_label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        self.hint_label.setStyleSheet(f"font-size:11px;color:{ORANGE};font-style:italic;")
        layout.addWidget(self.hint_label)

        # ── Options ──
        self.options_layout = QGridLayout()
        self.options_layout.setSpacing(10)
        self.option_buttons = []
        for i in range(4):
            btn = QPushButton("")
            btn.setMinimumHeight(54)
            btn.setStyleSheet(self._opt_style())
            btn.clicked.connect(lambda _, idx=i: self._on_answer(idx))
            self.option_buttons.append(btn)
            self.options_layout.addWidget(btn, i // 2, i % 2)
        layout.addLayout(self.options_layout)

        # ── Feedback ──
        self.feedback_label = QLabel("")
        self.feedback_label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        self.feedback_label.setStyleSheet("font-size:13px;font-weight:bold;")
        self.feedback_label.setMinimumHeight(36)
        self.feedback_label.setWordWrap(True)
        layout.addWidget(self.feedback_label)

        # ── Streak display ──
        streak_row = QHBoxLayout()
        streak_row.addStretch()
        self.streak_label = QLabel("🔥 0")
        self.streak_label.setStyleSheet(f"font-size:13px;color:{ORANGE};font-weight:bold;")
        self.streak_label.setToolTip("Current correct streak / 当前连对数")
        streak_row.addWidget(self.streak_label)
        streak_row.addStretch()
        layout.addLayout(streak_row)

        self.btn_next = styled_btn("下一题  Next →", RED, WHITE, 14, "10px 28px")
        self.btn_next.setVisible(False)
        self.btn_next.clicked.connect(self.load_question)
        layout.addWidget(self.btn_next, alignment=Qt.AlignmentFlag.AlignCenter)

    def _opt_style(self, state="normal"):
        styles = {
            "normal":  (WHITE,  DARK,  "#dee2e6"),
            "correct": (GREEN,  WHITE, GREEN),
            "wrong":   (RED,    WHITE, RED),
        }
        bg, fg, border = styles.get(state, styles["normal"])
        hover = f"background-color:#fff5f5;border-color:{RED};" if state == "normal" else ""
        return f"""
            QPushButton {{
                background-color:{bg}; color:{fg};
                border:2px solid {border}; border-radius:8px;
                font-size:16px; font-weight:bold; padding:8px;
            }}
            QPushButton:hover {{ {hover} }}
        """

    def _pool(self):
        if self.difficulty == 0:
            return POLYPHONES
        return [c for c in POLYPHONES if c["difficulty"] == self.difficulty] or POLYPHONES

    def load_question(self):
        self.feedback_label.setText("")
        self.hint_label.setText("")
        self.btn_next.setText("下一题  Next →")
        self.btn_next.setVisible(False)
        # ensure next btn always goes to load_question (reset after _finish_session reconnect)
        try:
            self.btn_next.clicked.disconnect()
        except Exception:
            pass
        self.btn_next.clicked.connect(self.load_question)

        pool = self._pool()
        self.current_char = random.choice(pool)
        readings = self.current_char["readings"]
        correct = random.choice(readings)
        self.correct_pinyin = correct["pinyin"]

        # Badges
        d = self.current_char.get("difficulty", 1)
        freq = correct.get("frequency", "medium")
        self.diff_badge.setText(DIFF_LABELS.get(d, ""))
        self.diff_badge.setStyleSheet(f"font-size:10px;color:white;background:{DIFF_COLORS.get(d,DARK)};border-radius:4px;padding:2px 8px;")
        self.freq_badge.setText(FREQ_LABELS.get(freq, ""))
        self.freq_badge.setStyleSheet(f"font-size:10px;color:white;background:{FREQ_COLORS.get(freq,GRAY)};border-radius:4px;padding:2px 8px;")

        self.char_label.setText(self.current_char["character"])
        self.context_label.setText(f"含义: {correct['meaning_zh']}  /  {correct['meaning_en']}")

        # Smart distractors
        distractors = build_distractors(self.correct_pinyin, self.current_char, n=3)

        # Show hint if any distractor is another reading of the same char
        same_char_readings = {r["pinyin"] for r in readings} - {self.correct_pinyin}
        if any(d in same_char_readings for d in distractors):
            self.hint_label.setText("⚠ 注意：选项中含有该字的其他读音  Watch out: options include other readings of this character")

        self.options = distractors + [self.correct_pinyin]
        random.shuffle(self.options)

        for i, btn in enumerate(self.option_buttons):
            btn.setText(self.options[i])
            btn.setStyleSheet(self._opt_style("normal"))
            btn.setEnabled(True)

    def _update_progress(self):
        if self.session_limit > 0:
            self.progress_bar.setMaximum(self.session_limit)
            self.progress_bar.setValue(self.total)
            self.progress_lbl.setText(f"第 {self.total} / {self.session_limit} 题  Question {self.total} of {self.session_limit}")
        else:
            self.progress_bar.setMaximum(max(self.total, 1))
            self.progress_bar.setValue(self.total)
            self.progress_lbl.setText(f"第 {self.total} 题  Question {self.total}")

    def _on_answer(self, idx):
        chosen = self.options[idx]
        for btn in self.option_buttons:
            btn.setEnabled(False)
        self.total += 1
        correct = (chosen == self.correct_pinyin)
        streak, best = Stats.update_streak(correct)

        if correct:
            self.score += 1
            self.option_buttons[idx].setStyleSheet(self._opt_style("correct"))
            for r in self.current_char["readings"]:
                if r["pinyin"] == self.correct_pinyin:
                    self.feedback_label.setText(f"✓ 正确 Correct!  例: {r['example_zh']} — {r['example_en']}")
                    self.feedback_label.setStyleSheet(f"font-size:13px;color:{GREEN};font-weight:bold;")
                    break
        else:
            self.option_buttons[idx].setStyleSheet(self._opt_style("wrong"))
            for i, opt in enumerate(self.options):
                if opt == self.correct_pinyin:
                    self.option_buttons[i].setStyleSheet(self._opt_style("correct"))
            self.feedback_label.setText(f"✗ 错误 Wrong.  正确答案: {self.correct_pinyin}")
            self.feedback_label.setStyleSheet(f"font-size:13px;color:{RED};font-weight:bold;")

        self.score_label.setText(f"{self.score} / {self.total}")
        streak_txt = f"🔥 {streak}"
        if streak >= 5:
            streak_txt += f"  🏆 Best: {best}"
        self.streak_label.setText(streak_txt)
        self._update_progress()

        # Check session end
        if self.session_limit > 0 and self.total >= self.session_limit:
            self.btn_next.setText("查看结果  See Results →")
            self.btn_next.setVisible(True)
            self.btn_next.clicked.disconnect()
            self.btn_next.clicked.connect(self._finish_session)
        else:
            self.btn_next.setText("下一题  Next →")
            self.btn_next.setVisible(True)

    def _finish_session(self):
        Stats.record_session(self.difficulty, self.score, self.total)
        saved_score, saved_total, saved_diff = self.score, self.total, self.difficulty
        self.total = 0  # prevent double-save in save_session
        if self.on_session_done:
            self.on_session_done(saved_score, saved_total, saved_diff)

    def reset(self, difficulty=0, session_limit=10):
        if self.total > 0:
            Stats.record_session(self.difficulty, self.score, self.total)
        self.difficulty = difficulty
        self.session_limit = session_limit
        self.score = 0
        self.total = 0
        self.score_label.setText("0 / 0")
        # reset progress bar
        limit = session_limit if session_limit > 0 else 1
        self.progress_bar.setMaximum(limit)
        self.progress_bar.setValue(0)
        self.progress_lbl.setText(
            f"第 0 / {session_limit} 题  Question 0 of {session_limit}"
            if session_limit > 0 else "第 0 题  Question 0"
        )
        s = Stats.get_stats()
        self.streak_label.setText(f"🔥 {s['streak']}")
        color = DIFF_COLORS.get(difficulty, BLUE) if difficulty > 0 else BLUE
        label = DIFF_LABELS.get(difficulty, "全部 All Levels")
        self.level_badge.setText(label)
        self.level_badge.setStyleSheet(f"font-size:12px;color:white;background:{color};border-radius:5px;padding:3px 10px;font-weight:bold;")
        self.load_question()

    def save_session(self):
        """Call when navigating away."""
        if self.total > 0:
            Stats.record_session(self.difficulty, self.score, self.total)
            self.total = 0  # prevent double-save


# ══════════════════════════════════════════════════════════════
# BROWSE SCREEN
# ══════════════════════════════════════════════════════════════
class BrowseScreen(QWidget):
    def __init__(self, parent=None):
        super().__init__(parent)
        self._build_ui()

    def _build_ui(self):
        layout = QVBoxLayout(self)
        layout.setContentsMargins(20, 15, 20, 15)

        top = QHBoxLayout()
        self.btn_back = styled_btn("← 返回 Back", DARK, WHITE, 12, "8px 16px")
        title = QLabel("词库浏览  Character Browser")
        title.setStyleSheet(f"font-size:18px;font-weight:bold;color:{RED};")
        top.addWidget(self.btn_back)
        top.addStretch()
        top.addWidget(title)
        top.addStretch()
        layout.addLayout(top)

        # Legend
        legend = QHBoxLayout()
        for d, lbl in [(1,"初级"),(2,"中级"),(3,"高级")]:
            dot = QLabel(f"■ {lbl}")
            dot.setStyleSheet(f"font-size:11px;color:{DIFF_COLORS[d]};")
            legend.addWidget(dot)
        legend.addSpacing(12)
        for f, lbl in [("high","常用"),("medium","偶用"),("low","少用")]:
            dot = QLabel(f"● {lbl}")
            dot.setStyleSheet(f"font-size:11px;color:{FREQ_COLORS[f]};")
            legend.addWidget(dot)
        legend.addStretch()
        layout.addLayout(legend)

        # Filter
        filter_row = QHBoxLayout()
        self.filter_btns = []
        for d, lbl in [(0,"全部"),(1,"初级"),(2,"中级"),(3,"高级")]:
            b = QPushButton(lbl)
            b.setCheckable(True)
            b.setChecked(d == 0)
            c = DIFF_COLORS.get(d, DARK)
            b.setStyleSheet(f"""
                QPushButton {{background:{c if d>0 else DARK};color:white;
                    border-radius:6px;padding:4px 12px;font-size:11px;font-weight:bold;border:none;}}
                QPushButton:checked {{border:2px solid {GOLD};}}
            """)
            b.clicked.connect(lambda _, dv=d: self._filter(dv))
            filter_row.addWidget(b)
            self.filter_btns.append((d, b))
        filter_row.addStretch()
        layout.addLayout(filter_row)

        self.scroll = QScrollArea()
        self.scroll.setWidgetResizable(True)
        self.scroll.setStyleSheet("QScrollArea{border:none;}")
        layout.addWidget(self.scroll)
        self._render_cards(POLYPHONES)

    def _filter(self, d):
        for dv, b in self.filter_btns:
            b.setChecked(dv == d)
        pool = POLYPHONES if d == 0 else [c for c in POLYPHONES if c["difficulty"] == d]
        self._render_cards(pool)

    def _render_cards(self, items):
        container = QWidget()
        grid = QGridLayout(container)
        grid.setSpacing(12)
        for idx, item in enumerate(items):
            grid.addWidget(self._make_card(item), idx // 2, idx % 2)
        self.scroll.setWidget(container)

    def _make_card(self, item):
        frame = QFrame()
        d = item.get("difficulty", 1)
        bc = DIFF_COLORS.get(d, GRAY)
        frame.setStyleSheet(f"""
            QFrame {{background:{WHITE};border:1px solid {bc}44;
                border-top:3px solid {bc};border-radius:10px;padding:4px;}}
        """)
        lay = QVBoxLayout(frame)
        lay.setSpacing(5)

        hdr = QHBoxLayout()
        char_lbl = QLabel(item["character"])
        char_lbl.setStyleSheet(f"font-size:40px;color:{RED};font-weight:bold;")
        diff_lbl = QLabel(DIFF_LABELS.get(d, ""))
        diff_lbl.setStyleSheet(f"font-size:10px;color:white;background:{bc};border-radius:4px;padding:2px 6px;")
        hdr.addWidget(char_lbl)
        hdr.addStretch()
        hdr.addWidget(diff_lbl)
        lay.addLayout(hdr)

        for r in item["readings"]:
            freq = r.get("frequency", "medium")
            row = QHBoxLayout()
            p_lbl = QLabel(r["pinyin"])
            p_lbl.setStyleSheet(f"font-size:14px;color:{DARK};font-weight:bold;min-width:55px;")
            dot = QLabel("●")
            dot.setStyleSheet(f"font-size:10px;color:{FREQ_COLORS.get(freq,GRAY)};")
            m_lbl = QLabel(f"{r['meaning_zh']} / {r['meaning_en']}")
            m_lbl.setStyleSheet(f"font-size:11px;color:{GRAY};")
            m_lbl.setWordWrap(True)
            row.addWidget(p_lbl)
            row.addWidget(dot)
            row.addWidget(m_lbl, 1)
            lay.addLayout(row)
            ex = QLabel(f"  例: {r['example_zh']} — {r['example_en']}")
            ex.setStyleSheet(f"font-size:11px;color:{ORANGE};")
            lay.addWidget(ex)
        return frame


# ══════════════════════════════════════════════════════════════
# STATS SCREEN
# ══════════════════════════════════════════════════════════════
class StatsScreen(QWidget):
    def __init__(self, parent=None):
        super().__init__(parent)
        self._build_ui()

    def _build_ui(self):
        self.layout = QVBoxLayout(self)
        self.layout.setContentsMargins(24, 16, 24, 16)
        self.layout.setSpacing(12)

        top = QHBoxLayout()
        self.btn_back = styled_btn("← 返回 Back", DARK, WHITE, 12, "8px 14px")
        title = QLabel("我的成绩  My Stats")
        title.setStyleSheet(f"font-size:20px;font-weight:bold;color:{BLUE};")
        self.btn_reset = styled_btn("重置 Reset", GRAY, WHITE, 11, "6px 12px")
        top.addWidget(self.btn_back)
        top.addStretch()
        top.addWidget(title)
        top.addStretch()
        top.addWidget(self.btn_reset)
        self.layout.addLayout(top)

        self.scroll = QScrollArea()
        self.scroll.setWidgetResizable(True)
        self.scroll.setStyleSheet("QScrollArea{border:none;}")
        self.layout.addWidget(self.scroll)

        self.btn_reset.clicked.connect(self._on_reset)

    def refresh(self):
        """Reload stats data and re-render."""
        data = Stats.get_stats()
        container = QWidget()
        lay = QVBoxLayout(container)
        lay.setSpacing(14)

        # ── Streak card ──
        streak_frame = QFrame()
        streak_frame.setStyleSheet(f"QFrame{{background:{DARK};border-radius:12px;padding:4px;}}")
        sf = QHBoxLayout(streak_frame)
        cur = QLabel(f"🔥  {data['streak']}")
        cur.setStyleSheet(f"font-size:28px;font-weight:bold;color:{ORANGE};")
        cur_lbl = QLabel("当前连对\nCurrent Streak")
        cur_lbl.setStyleSheet(f"font-size:11px;color:{GRAY};")
        best = QLabel(f"🏆  {data['best_streak']}")
        best.setStyleSheet(f"font-size:28px;font-weight:bold;color:{GOLD};")
        best_lbl = QLabel("最高连对\nBest Streak")
        best_lbl.setStyleSheet(f"font-size:11px;color:{GRAY};")
        for w in [cur, cur_lbl, best, best_lbl]:
            sf.addWidget(w, alignment=Qt.AlignmentFlag.AlignCenter)
        lay.addWidget(streak_frame)

        # ── Per-level summary ──
        level_frame = QFrame()
        level_frame.setStyleSheet(f"QFrame{{background:{WHITE};border-radius:10px;border:1px solid #dee2e6;}}")
        lf = QGridLayout(level_frame)
        lf.setSpacing(8)
        lf.setContentsMargins(12, 10, 12, 10)

        headers = ["难度 Level", "已答 Answered", "正确 Correct", "正确率 Accuracy", "最高 Best"]
        for col, h in enumerate(headers):
            lbl = QLabel(h)
            lbl.setStyleSheet(f"font-size:11px;font-weight:bold;color:{GRAY};")
            lf.addWidget(lbl, 0, col)

        rows = [
            (0, "全部 All", BLUE),
            (1, "初级 Beginner", GREEN),
            (2, "中级 Intermediate", ORANGE),
            (3, "高级 Advanced", RED),
        ]
        for row_i, (d, label, color) in enumerate(rows, 1):
            pl = data["per_level"].get(str(d), {})
            answered = pl.get("total_answered", 0)
            correct  = pl.get("total_correct", 0)
            best_pct = pl.get("best_pct", 0)
            acc = f"{round(correct/answered*100)}%" if answered > 0 else "—"

            lf.addWidget(self._cell(label, color, bold=True), row_i, 0)
            lf.addWidget(self._cell(str(answered)), row_i, 1)
            lf.addWidget(self._cell(str(correct)), row_i, 2)
            lf.addWidget(self._cell(acc, GREEN if answered > 0 and correct/answered >= 0.7 else RED if answered > 0 else GRAY), row_i, 3)
            lf.addWidget(self._cell(f"{best_pct}%", GOLD if best_pct >= 80 else GRAY), row_i, 4)

        lay.addWidget(level_frame)

        # ── Recent sessions ──
        sessions = list(reversed(data.get("sessions", [])))[:10]
        if sessions:
            sec_title = QLabel("最近记录  Recent Sessions")
            sec_title.setStyleSheet(f"font-size:13px;font-weight:bold;color:{DARK};")
            lay.addWidget(sec_title)

            for s in sessions:
                sf2 = QFrame()
                sf2.setStyleSheet(f"QFrame{{background:{WHITE};border-radius:8px;border:1px solid #dee2e6;}}")
                sr = QHBoxLayout(sf2)
                sr.setContentsMargins(10, 6, 10, 6)
                d_val = s.get("level", 0)
                color = DIFF_COLORS.get(d_val, BLUE) if d_val > 0 else BLUE
                lvl_lbl = QLabel(DIFF_LABELS.get(d_val, "全部"))
                lvl_lbl.setStyleSheet(f"font-size:11px;color:white;background:{color};border-radius:4px;padding:2px 6px;")
                date_lbl = QLabel(s.get("date", ""))
                date_lbl.setStyleSheet(f"font-size:11px;color:{GRAY};")
                score_lbl = QLabel(f"{s['score']} / {s['total']}")
                score_lbl.setStyleSheet(f"font-size:13px;font-weight:bold;color:{DARK};")
                pct = s.get("pct", 0)
                pct_color = GREEN if pct >= 70 else ORANGE if pct >= 50 else RED
                pct_lbl = QLabel(f"{pct}%")
                pct_lbl.setStyleSheet(f"font-size:14px;font-weight:bold;color:{pct_color};")
                sr.addWidget(lvl_lbl)
                sr.addSpacing(8)
                sr.addWidget(date_lbl)
                sr.addStretch()
                sr.addWidget(score_lbl)
                sr.addSpacing(8)
                sr.addWidget(pct_lbl)
                lay.addWidget(sf2)
        else:
            empty = QLabel("暂无记录  No sessions yet — go take a quiz!")
            empty.setAlignment(Qt.AlignmentFlag.AlignCenter)
            empty.setStyleSheet(f"font-size:13px;color:{GRAY};font-style:italic;")
            lay.addWidget(empty)

        lay.addStretch()
        self.scroll.setWidget(container)

    def _cell(self, text, color=DARK, bold=False):
        lbl = QLabel(text)
        lbl.setStyleSheet(f"font-size:12px;color:{color};{'font-weight:bold;' if bold else ''}")
        return lbl

    def _on_reset(self):
        from PyQt6.QtWidgets import QMessageBox
        reply = QMessageBox.question(self, "重置成绩 Reset Stats",
            "确定要清除所有成绩记录吗？\nAre you sure you want to reset all stats?",
            QMessageBox.StandardButton.Yes | QMessageBox.StandardButton.No)
        if reply == QMessageBox.StandardButton.Yes:
            Stats.reset_stats()
            self.refresh()


# ══════════════════════════════════════════════════════════════
# MAIN WINDOW
# ══════════════════════════════════════════════════════════════
# RESULT SCREEN
# ══════════════════════════════════════════════════════════════
class ResultScreen(QWidget):
    def __init__(self, parent=None):
        super().__init__(parent)
        self._build_ui()

    def _build_ui(self):
        layout = QVBoxLayout(self)
        layout.setAlignment(Qt.AlignmentFlag.AlignCenter)
        layout.setContentsMargins(40, 30, 40, 30)
        layout.setSpacing(16)

        self.emoji_lbl = QLabel("🎉")
        self.emoji_lbl.setAlignment(Qt.AlignmentFlag.AlignCenter)
        self.emoji_lbl.setStyleSheet("font-size:52px;")
        layout.addWidget(self.emoji_lbl)

        self.title_lbl = QLabel("本次结果  Session Result")
        self.title_lbl.setAlignment(Qt.AlignmentFlag.AlignCenter)
        self.title_lbl.setStyleSheet(f"font-size:22px;font-weight:bold;color:{DARK};")
        layout.addWidget(self.title_lbl)

        # Big score circle
        self.score_frame = QFrame()
        self.score_frame.setFixedSize(160, 160)
        self.score_frame.setStyleSheet(f"""
            QFrame{{background:{RED};border-radius:80px;}}
        """)
        sf = QVBoxLayout(self.score_frame)
        sf.setAlignment(Qt.AlignmentFlag.AlignCenter)
        self.pct_lbl = QLabel("0%")
        self.pct_lbl.setAlignment(Qt.AlignmentFlag.AlignCenter)
        self.pct_lbl.setStyleSheet(f"font-size:36px;font-weight:bold;color:{GOLD};")
        self.score_detail = QLabel("0 / 0")
        self.score_detail.setAlignment(Qt.AlignmentFlag.AlignCenter)
        self.score_detail.setStyleSheet(f"font-size:15px;color:{CREAM};")
        sf.addWidget(self.pct_lbl)
        sf.addWidget(self.score_detail)
        layout.addWidget(self.score_frame, alignment=Qt.AlignmentFlag.AlignCenter)

        self.msg_lbl = QLabel("")
        self.msg_lbl.setAlignment(Qt.AlignmentFlag.AlignCenter)
        self.msg_lbl.setStyleSheet(f"font-size:15px;color:{DARK};font-weight:bold;")
        layout.addWidget(self.msg_lbl)

        self.streak_lbl = QLabel("")
        self.streak_lbl.setAlignment(Qt.AlignmentFlag.AlignCenter)
        self.streak_lbl.setStyleSheet(f"font-size:13px;color:{ORANGE};")
        layout.addWidget(self.streak_lbl)

        layout.addSpacing(10)

        btn_row = QHBoxLayout()
        btn_row.setSpacing(12)
        self.btn_again  = styled_btn("再来一次  Play Again", RED,  WHITE, 14, "12px 28px")
        self.btn_levels = styled_btn("换难度  Change Level", DARK, WHITE, 13, "12px 24px")
        self.btn_home   = styled_btn("主页  Home",           BLUE, WHITE, 13, "12px 24px")
        btn_row.addWidget(self.btn_again)
        btn_row.addWidget(self.btn_levels)
        btn_row.addWidget(self.btn_home)
        layout.addLayout(btn_row)

    def show_result(self, score: int, total: int, difficulty: int):
        pct = round(score / total * 100) if total > 0 else 0

        self.pct_lbl.setText(f"{pct}%")
        self.score_detail.setText(f"{score} / {total}")

        # Color circle by performance
        if pct >= 80:
            color, emoji, msg = GREEN, "🏆", "优秀！Excellent!"
        elif pct >= 60:
            color, emoji, msg = ORANGE, "👍", "不错！Good job!"
        else:
            color, emoji, msg = RED, "💪", "继续加油！Keep practicing!"

        self.score_frame.setStyleSheet(f"QFrame{{background:{color};border-radius:80px;}}")
        self.emoji_lbl.setText(emoji)
        self.msg_lbl.setText(msg)

        s = Stats.get_stats()
        streak = s.get("streak", 0)
        best   = s.get("best_streak", 0)
        self.streak_lbl.setText(f"🔥 当前连对 Streak: {streak}   🏆 最高 Best: {best}")

        diff_name = DIFF_LABELS.get(difficulty, "全部 All")
        self.title_lbl.setText(f"本次结果  {diff_name}")


# ══════════════════════════════════════════════════════════════
# FLASHCARD SCREEN
# ══════════════════════════════════════════════════════════════
class FlashcardScreen(QWidget):
    def __init__(self, parent=None):
        super().__init__(parent)
        self._deck = []
        self._idx = 0
        self._flipped = False
        self._diff = 0
        self._build_ui()

    # ── UI ──────────────────────────────────────────────────────
    def _build_ui(self):
        root = QVBoxLayout(self)
        root.setContentsMargins(24, 16, 24, 16)
        root.setSpacing(10)

        # Top bar
        top = QHBoxLayout()
        self.btn_back = styled_btn("← 返回 Back", DARK, WHITE, 12, "8px 14px")
        self.title_lbl = QLabel("闪卡  Flashcards")
        self.title_lbl.setStyleSheet(f"font-size:18px;font-weight:bold;color:{DARK};")
        self.progress_lbl = QLabel("")
        self.progress_lbl.setStyleSheet(f"font-size:13px;color:{GRAY};font-weight:bold;")
        top.addWidget(self.btn_back)
        top.addStretch()
        top.addWidget(self.title_lbl)
        top.addStretch()
        top.addWidget(self.progress_lbl)
        root.addLayout(top)

        # Level filter
        frow = QHBoxLayout()
        frow.setSpacing(6)
        self._filter_btns = []
        for d, lbl in [(0,"全部"),(1,"初级"),(2,"中级"),(3,"高级")]:
            b = QPushButton(lbl)
            b.setCheckable(True)
            b.setChecked(d == 0)
            c = DIFF_COLORS.get(d, DARK)
            b.setStyleSheet(f"""
                QPushButton{{background:{c if d>0 else DARK};color:white;
                    border-radius:6px;padding:4px 12px;font-size:11px;font-weight:bold;border:none;}}
                QPushButton:checked{{border:2px solid {GOLD};}}
            """)
            b.clicked.connect(lambda _, dv=d: self._set_filter(dv))
            frow.addWidget(b)
            self._filter_btns.append((d, b))

        self.btn_shuffle = styled_btn("🔀 随机 Shuffle", PURPLE, WHITE, 11, "4px 12px")
        self.btn_shuffle.clicked.connect(self._shuffle)
        frow.addStretch()
        frow.addWidget(self.btn_shuffle)
        root.addLayout(frow)

        # ── Card area (clickable) ──
        self.card = QFrame()
        self.card.setMinimumHeight(320)
        self.card.setCursor(Qt.CursorShape.PointingHandCursor)
        self.card.mousePressEvent = lambda e: self._flip()
        self._apply_card_style(flipped=False)

        card_layout = QVBoxLayout(self.card)
        card_layout.setAlignment(Qt.AlignmentFlag.AlignCenter)
        card_layout.setSpacing(8)

        # Front face widgets
        self.front_widget = QWidget()
        fl = QVBoxLayout(self.front_widget)
        fl.setAlignment(Qt.AlignmentFlag.AlignCenter)
        fl.setSpacing(6)

        self.diff_badge = QLabel("")
        self.diff_badge.setAlignment(Qt.AlignmentFlag.AlignCenter)
        self.diff_badge.setStyleSheet(f"font-size:11px;color:white;background:{GREEN};border-radius:4px;padding:2px 10px;")
        fl.addWidget(self.diff_badge, alignment=Qt.AlignmentFlag.AlignCenter)

        self.char_lbl = QLabel("字")
        self.char_lbl.setAlignment(Qt.AlignmentFlag.AlignCenter)
        self.char_lbl.setStyleSheet(f"font-size:100px;font-weight:bold;color:{GOLD};")
        fl.addWidget(self.char_lbl)

        hint = QLabel("点击翻转  Click to flip")
        hint.setAlignment(Qt.AlignmentFlag.AlignCenter)
        hint.setStyleSheet(f"font-size:12px;color:{CREAM}88;font-style:italic;")
        fl.addWidget(hint)

        # Back face widgets
        self.back_widget = QWidget()
        self.back_widget.setVisible(False)
        bl = QVBoxLayout(self.back_widget)
        bl.setAlignment(Qt.AlignmentFlag.AlignTop)
        bl.setSpacing(0)

        self.back_char_lbl = QLabel("")
        self.back_char_lbl.setAlignment(Qt.AlignmentFlag.AlignCenter)
        self.back_char_lbl.setStyleSheet(f"font-size:44px;font-weight:bold;color:{GOLD};padding-bottom:4px;")
        bl.addWidget(self.back_char_lbl)

        self.readings_widget = QWidget()
        self.readings_layout = QVBoxLayout(self.readings_widget)
        self.readings_layout.setSpacing(6)
        self.readings_layout.setContentsMargins(8, 0, 8, 0)
        bl.addWidget(self.readings_widget)

        card_layout.addWidget(self.front_widget)
        card_layout.addWidget(self.back_widget)
        root.addWidget(self.card, stretch=1)

        # ── Navigation ──
        nav = QHBoxLayout()
        self.btn_prev = styled_btn("◀  上一张", DARK, WHITE, 13, "10px 24px")
        self.btn_next_card = styled_btn("下一张  ▶", RED,  WHITE, 13, "10px 24px")
        self.btn_prev.clicked.connect(self._prev)
        self.btn_next_card.clicked.connect(self._next)
        nav.addWidget(self.btn_prev)
        nav.addStretch()
        nav.addWidget(self.btn_next_card)
        root.addLayout(nav)

    # ── Logic ───────────────────────────────────────────────────
    def _apply_card_style(self, flipped: bool):
        if flipped:
            bg = f"qlineargradient(x1:0,y1:0,x2:1,y2:1,stop:0 {CREAM},stop:1 #e8dcc8)"
            border = GOLD
        else:
            bg = f"qlineargradient(x1:0,y1:0,x2:1,y2:1,stop:0 {RED},stop:1 {DARK_RED})"
            border = DARK_RED
        self.card.setStyleSheet(f"""
            QFrame{{
                background:{bg};
                border:2px solid {border};
                border-radius:20px;
            }}
        """)

    def _set_filter(self, d):
        self._diff = d
        for dv, b in self._filter_btns:
            b.setChecked(dv == d)
        pool = POLYPHONES if d == 0 else [c for c in POLYPHONES if c["difficulty"] == d]
        self._deck = list(pool)
        self._idx = 0
        self._show_card()

    def _shuffle(self):
        random.shuffle(self._deck)
        self._idx = 0
        self._show_card()

    def load(self, difficulty=0):
        self._diff = difficulty
        for dv, b in self._filter_btns:
            b.setChecked(dv == difficulty)
        pool = POLYPHONES if difficulty == 0 else [c for c in POLYPHONES if c["difficulty"] == difficulty]
        self._deck = list(pool)
        random.shuffle(self._deck)
        self._idx = 0
        self._show_card()

    def _show_card(self):
        self._flipped = False
        self._apply_card_style(False)
        self.front_widget.setVisible(True)
        self.back_widget.setVisible(False)

        if not self._deck:
            return
        item = self._deck[self._idx]
        d = item.get("difficulty", 1)
        self.char_lbl.setText(item["character"])
        self.diff_badge.setText(DIFF_LABELS.get(d, ""))
        self.diff_badge.setStyleSheet(
            f"font-size:11px;color:white;background:{DIFF_COLORS.get(d,DARK)};"
            f"border-radius:4px;padding:2px 10px;")
        self.progress_lbl.setText(f"{self._idx+1} / {len(self._deck)}")

    def _flip(self):
        if not self._deck:
            return
        self._flipped = not self._flipped
        self._apply_card_style(self._flipped)
        self.front_widget.setVisible(not self._flipped)
        self.back_widget.setVisible(self._flipped)

        if self._flipped:
            item = self._deck[self._idx]
            self.back_char_lbl.setText(item["character"])

            # Clear old readings
            while self.readings_layout.count():
                child = self.readings_layout.takeAt(0)
                if child.widget():
                    child.widget().deleteLater()

            for r in item["readings"]:
                freq = r.get("frequency", "medium")
                row_w = QFrame()
                row_w.setStyleSheet(f"""
                    QFrame{{background:white;border-radius:8px;
                        border-left:4px solid {FREQ_COLORS.get(freq,GRAY)};
                        padding:2px;margin:1px 0;}}
                """)
                rl = QHBoxLayout(row_w)
                rl.setContentsMargins(8, 4, 8, 4)
                rl.setSpacing(8)

                pinyin_lbl = QLabel(r["pinyin"])
                pinyin_lbl.setStyleSheet(f"font-size:18px;font-weight:bold;color:{RED};min-width:70px;")

                info_w = QWidget()
                info_l = QVBoxLayout(info_w)
                info_l.setContentsMargins(0,0,0,0)
                info_l.setSpacing(1)
                meaning = QLabel(f"{r['meaning_zh']}  /  {r['meaning_en']}")
                meaning.setStyleSheet(f"font-size:12px;color:{DARK};")
                meaning.setWordWrap(True)
                example = QLabel(f"例: {r['example_zh']} — {r['example_en']}")
                example.setStyleSheet(f"font-size:11px;color:{ORANGE};")
                info_l.addWidget(meaning)
                info_l.addWidget(example)

                freq_lbl = QLabel(FREQ_LABELS.get(freq,""))
                freq_lbl.setStyleSheet(
                    f"font-size:9px;color:white;background:{FREQ_COLORS.get(freq,GRAY)};"
                    f"border-radius:3px;padding:1px 5px;")
                freq_lbl.setAlignment(Qt.AlignmentFlag.AlignTop)

                rl.addWidget(pinyin_lbl)
                rl.addWidget(info_w, 1)
                rl.addWidget(freq_lbl)
                self.readings_layout.addWidget(row_w)

    def _prev(self):
        if self._deck:
            self._idx = (self._idx - 1) % len(self._deck)
            self._show_card()

    def _next(self):
        if self._deck:
            self._idx = (self._idx + 1) % len(self._deck)
            self._show_card()


# ══════════════════════════════════════════════════════════════
class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("多音字练习 — Polyphonic Chinese Characters")
        self.setMinimumSize(520, 700)
        self.setWindowIcon(QIcon(create_logo_pixmap(32)))
        self.setStyleSheet(f"QMainWindow,QWidget{{background-color:{CREAM};}}")

        self.stack = QStackedWidget()
        self.setCentralWidget(self.stack)

        self.home         = HomeScreen()
        self.levels       = LevelSelectScreen()
        self.quiz         = QuizScreen()
        self.browse       = BrowseScreen()
        self.stats_screen = StatsScreen()
        self.flashcard    = FlashcardScreen()
        self.result       = ResultScreen()

        self.stack.addWidget(self.home)         # 0
        self.stack.addWidget(self.levels)       # 1
        self.stack.addWidget(self.quiz)         # 2
        self.stack.addWidget(self.browse)       # 3
        self.stack.addWidget(self.stats_screen) # 4
        self.stack.addWidget(self.flashcard)    # 5
        self.stack.addWidget(self.result)       # 6

        self.home.btn_quiz.clicked.connect(lambda: self.stack.setCurrentIndex(1))
        self.home.btn_flash.clicked.connect(self._go_flashcard)
        self.home.btn_browse.clicked.connect(lambda: self.stack.setCurrentIndex(3))
        self.home.btn_stats.clicked.connect(self._go_stats)
        self.levels.btn_back.clicked.connect(lambda: self.stack.setCurrentIndex(0))
        self.quiz.btn_back.clicked.connect(self._quiz_back)
        self.browse.btn_back.clicked.connect(lambda: self.stack.setCurrentIndex(0))
        self.stats_screen.btn_back.clicked.connect(lambda: self.stack.setCurrentIndex(0))
        self.flashcard.btn_back.clicked.connect(lambda: self.stack.setCurrentIndex(0))
        self.result.btn_again.clicked.connect(self._result_again)
        self.result.btn_levels.clicked.connect(lambda: self.stack.setCurrentIndex(1))
        self.result.btn_home.clicked.connect(lambda: self.stack.setCurrentIndex(0))

        self.levels.on_level_selected = self._start_quiz
        self.quiz.on_session_done = self._show_result

    def _start_quiz(self, difficulty, count=10):
        self._last_quiz_difficulty = difficulty
        self._last_quiz_count = count
        self.quiz.reset(difficulty, count)
        self.stack.setCurrentIndex(2)

    def _quiz_back(self):
        self.quiz.save_session()
        self.stack.setCurrentIndex(1)

    def _show_result(self, score, total, difficulty):
        self.result.show_result(score, total, difficulty)
        self.stack.setCurrentIndex(6)

    def _result_again(self):
        d = getattr(self, '_last_quiz_difficulty', 0)
        c = getattr(self, '_last_quiz_count', 10)
        self.quiz.reset(d, c)
        self.stack.setCurrentIndex(2)

    def _go_stats(self):
        self.stats_screen.refresh()
        self.stack.setCurrentIndex(4)

    def _go_flashcard(self):
        self.flashcard.load(0)
        self.stack.setCurrentIndex(5)
