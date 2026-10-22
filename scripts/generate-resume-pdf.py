#!/usr/bin/env python3
"""Transcribe the original resume text into public/VB_Google__Resume.pdf.

The original binary was not on this worker VM; this file is built from the
parent-store OCR of VB_Google__Resume.pdf.
"""

from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer

OUT = "/tmp/vb-profile/public/VB_Google__Resume.pdf"
INK = HexColor("#111827")
MUTED = HexColor("#4b5563")
ACCENT = HexColor("#0e7490")


def styles():
    base = getSampleStyleSheet()
    return {
        "name": ParagraphStyle(
            "Name", parent=base["Title"], fontName="Times-Bold", fontSize=15,
            textColor=INK, alignment=1, spaceAfter=1, leading=18,
        ),
        "head": ParagraphStyle(
            "Head", parent=base["Normal"], fontName="Times-Italic", fontSize=9.5,
            textColor=MUTED, alignment=1, spaceAfter=2, leading=12,
        ),
        "meta": ParagraphStyle(
            "Meta", parent=base["Normal"], fontName="Times-Roman", fontSize=8.7,
            textColor=MUTED, alignment=1, spaceAfter=6, leading=11,
        ),
        "h": ParagraphStyle(
            "H", parent=base["Heading2"], fontName="Times-Bold", fontSize=10.5,
            textColor=ACCENT, spaceBefore=6, spaceAfter=3, leading=13,
        ),
        "body": ParagraphStyle(
            "Body", parent=base["Normal"], fontName="Times-Roman", fontSize=9,
            textColor=INK, leading=11.6, spaceAfter=2,
        ),
        "role": ParagraphStyle(
            "Role", parent=base["Normal"], fontName="Times-Bold", fontSize=10,
            textColor=INK, leading=12.5, spaceAfter=1,
        ),
        "sub": ParagraphStyle(
            "Sub", parent=base["Normal"], fontName="Times-Italic", fontSize=8.7,
            textColor=MUTED, leading=11.2, spaceAfter=3,
        ),
    }


def main():
    s = styles()
    doc = SimpleDocTemplate(
        OUT, pagesize=letter,
        leftMargin=0.6 * inch, rightMargin=0.6 * inch,
        topMargin=0.42 * inch, bottomMargin=0.42 * inch,
        title="Vijay Baskaran Arjun Dev",
        author="Vijay Baskaran Arjun Dev",
    )
    story = [
        Paragraph("Vijay Baskaran Arjun Dev", s["name"]),
        Paragraph(
            "Principal Staff Software Engineer @ Retailetics | Algorithmic AI Trader &amp; Quantitative Developer | AI/ML Developer | Mobile Systems &amp; Scaled Engineering",
            s["head"],
        ),
        Paragraph(
            "+91 8088413589 &nbsp;·&nbsp; +60 1151135376 &nbsp;·&nbsp; yoursvijii@gmail.com<br/>linkedin.com/in/vijay-baskaran-arjun-dev &nbsp;·&nbsp; github.com/YoursViji/vb-profile<br/>Federal Territory of Kuala Lumpur, Malaysia",
            s["meta"],
        ),
        Paragraph("EXPERIENCE", s["h"]),
        Paragraph("Principal Staff Software Engineer — Retailetics SDN BHD", s["role"]),
        Paragraph("Kuala Lumpur, Malaysia &nbsp;·&nbsp; February 2021 – Present", s["sub"]),
        Paragraph(
            "Retailetics AI-infused Self-Checkout Smart Trolley (ezyCart). Spearheaded an AI-powered self-checkout shopping cart: architecture, stakeholder design, and UX. Built a real-time socket pipeline between IoT devices and the ezyCart Android app for fast sync without slow transfers or redundant permission requests.",
            s["body"],
        ),
        Paragraph(
            "Delivered million-dollar savings with an AI-powered indoor navigation system. Saved over $2M by eliminating thousands of Bluetooth beacon devices.",
            s["body"],
        ),
        Paragraph(
            "Conceptualized, designed, and developed a cross-platform support staff app (Flutter) and an Android TV cart monitor system.",
            s["body"],
        ),
        Paragraph(
            "Conceptualized and developed Lisa — an AI shopping assistant that resolves customer queries and provides real-time product recommendations and promotions.",
            s["body"],
        ),
        Paragraph("Developed and deployed machine learning models for the in-store product line.", s["body"]),
        Paragraph(
            "Automated build pipeline and deployment for merchants and outlets, reducing deployment time across retail sites.",
            s["body"],
        ),
        Paragraph(
            "Led split testing initiatives driving multi-million-dollar revenue growth and stronger in-store customer experiences.",
            s["body"],
        ),
        Paragraph("TAN INTELLIGENCE", s["h"]),
        Paragraph("Custom trading indicators", s["role"]),
        Paragraph(
            "<b>End-to-End Quantitative Systems:</b> Engineered and deployed proprietary algorithmic trading models and custom indicators across Commodities, FX, and Crypto, operating systematically for over 6 years.",
            s["body"],
        ),
        Paragraph(
            "<b>Automated Architecture &amp; Telegram Pipelines:</b> Built custom 5-minute and 15-minute signal engine pipelines integrated with Telegram alerts and low-latency automated execution AI-bots via REST and WebSockets.",
            s["body"],
        ),
        Paragraph(
            "<b>Strategy &amp; Market Structure:</b> Developed rule-based frameworks applying Smart Money Concepts (SMC), liquidity sweeps, and dynamic position-sizing protocols to optimize risk-adjusted returns.",
            s["body"],
        ),
        Paragraph(
            "<b>Execution &amp; Backtesting Rigor:</b> Automated multi-broker execution (TradingView, MetaTrader) using Python and Pine Script; backtested and forward-tested strategies to maintain a sub-5% maximum drawdown limit.",
            s["body"],
        ),
        Paragraph(
            "<b>Top Skills:</b> Quantitative Finance · Algorithmic Trading · Python · Pine Script · Automated Execution · API Integration (WebSockets/REST) · Risk Management",
            s["body"],
        ),
        Paragraph("SKILLS", s["h"]),
        Paragraph("<b>Mobile:</b> Java, Kotlin, Dart, Android SDK, Jetpack Compose, Flutter, Kotlin Multiplatform, iOS", s["body"]),
        Paragraph("<b>Backend:</b> REST, GraphQL, WebSockets, Spring Boot, Postgres, SQLite, microservices", s["body"]),
        Paragraph("<b>AI/ML:</b> TensorFlow, PyTorch, Keras, OpenCV, on-device ML, NLP, model quantization", s["body"]),
        Paragraph("<b>Delivery:</b> Jenkins, Fastlane, Docker, Git, CI/CD, split testing, SOLID, Clean Architecture, MVVM", s["body"]),
        Paragraph("EDUCATION", s["h"]),
        Paragraph("Bachelor of Engineering in Computer Science and Engineering", s["role"]),
        Paragraph("Anna University Chennai", s["sub"]),
        Paragraph("CERTIFICATIONS", s["h"]),
        Paragraph("Mobile iOS &amp; Android development — Target Software, Chennai", s["body"]),
        Paragraph("SOLID Principles — Coursera", s["body"]),
        Paragraph("AI/ML Architecture — IBM", s["body"]),
        Paragraph("Master prompting — Claude and Coursera", s["body"]),
        Spacer(1, 8),
        Paragraph(
            "Contact: yoursvijii@gmail.com · +91 8088413589 · +60 1151135376 · linkedin.com/in/vijay-baskaran-arjun-dev · github.com/YoursViji/vb-profile",
            s["meta"],
        ),
    ]
    doc.build(story)
    print(OUT)


if __name__ == "__main__":
    main()
