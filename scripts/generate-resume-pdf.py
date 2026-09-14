#!/usr/bin/env python3
"""Generate a public resume PDF aligned with the portfolio (Retailetics-only employment)."""

from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    ListFlowable,
    ListItem,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
)

OUT = "/workspace/public/VB_Google__Resume.pdf"
INK = HexColor("#111827")
MUTED = HexColor("#4b5563")
ACCENT = HexColor("#0e7490")


def style_sheet():
    base = getSampleStyleSheet()
    styles = {
        "name": ParagraphStyle(
            "Name",
            parent=base["Title"],
            fontName="Times-Bold",
            fontSize=18,
            textColor=INK,
            spaceAfter=4,
            leading=22,
            alignment=1,
        ),
        "headline": ParagraphStyle(
            "Headline",
            parent=base["Normal"],
            fontName="Times-Italic",
            fontSize=10,
            textColor=MUTED,
            spaceAfter=4,
            leading=13,
            alignment=1,
        ),
        "meta": ParagraphStyle(
            "Meta",
            parent=base["Normal"],
            fontName="Times-Roman",
            fontSize=9,
            textColor=MUTED,
            spaceAfter=12,
            alignment=1,
        ),
        "h": ParagraphStyle(
            "H",
            parent=base["Heading2"],
            fontName="Times-Bold",
            fontSize=11,
            textColor=ACCENT,
            spaceBefore=10,
            spaceAfter=4,
            borderPadding=0,
            leading=14,
        ),
        "body": ParagraphStyle(
            "Body",
            parent=base["Normal"],
            fontName="Times-Roman",
            fontSize=10,
            textColor=INK,
            leading=13,
            spaceAfter=4,
        ),
        "role": ParagraphStyle(
            "Role",
            parent=base["Normal"],
            fontName="Times-Bold",
            fontSize=10.5,
            textColor=INK,
            leading=13,
            spaceAfter=1,
        ),
        "sub": ParagraphStyle(
            "Sub",
            parent=base["Normal"],
            fontName="Times-Italic",
            fontSize=9.5,
            textColor=MUTED,
            leading=12,
            spaceAfter=4,
        ),
        "bullet": ParagraphStyle(
            "Bullet",
            parent=base["Normal"],
            fontName="Times-Roman",
            fontSize=10,
            textColor=INK,
            leading=13,
        ),
    }
    return styles


def main():
    styles = style_sheet()
    doc = SimpleDocTemplate(
        OUT,
        pagesize=letter,
        leftMargin=0.7 * inch,
        rightMargin=0.7 * inch,
        topMargin=0.55 * inch,
        bottomMargin=0.55 * inch,
        title="Vijay Baskaran Arjun Dev",
        author="Vijay Baskaran Arjun Dev",
    )
    story = [
        Paragraph("Vijay Baskaran Arjun Dev", styles["name"]),
        Paragraph(
            "Head of Software Technologies @ Retailetics | AI/ML Developer | Mobile Systems &amp; Scaled Engineering",
            styles["headline"],
        ),
        Paragraph(
            "Federal Territory of Kuala Lumpur, Malaysia &nbsp;·&nbsp; GitHub: github.com (profile URL not listed on source resume)",
            styles["meta"],
        ),
        Paragraph("EXPERIENCE", styles["h"]),
        Paragraph("Head of Software Technologies &nbsp;—&nbsp; Retailetics", styles["role"]),
        Paragraph("Federal Territory of Kuala Lumpur, Malaysia &nbsp;·&nbsp; Present", styles["sub"]),
        Paragraph(
            "Lead software for AI-infused in-store retail: scan-pay-go carts, kiosks, cart security, and aisle wayfinding.",
            styles["body"],
        ),
        ListFlowable(
            [
                ListItem(
                    Paragraph(
                        "Own the software surface for Retailetics’ in-store stack: AI-infused smart trolleys, weight-sensor self-checkout kiosks, automatic antitheft cart locking, and indoor product navigation.",
                        styles["bullet"],
                    )
                ),
                ListItem(
                    Paragraph(
                        "Lead mobile systems and scaled services so scan, weigh, pay, and wayfinding stay in lockstep across carts, kiosks, and store operations.",
                        styles["bullet"],
                    )
                ),
                ListItem(
                    Paragraph(
                        "Apply computer vision, on-device inference, and cloud models so product validation, promotions, and hyperlocal insights land while the shopper is still in the aisle.",
                        styles["bullet"],
                    )
                ),
                ListItem(
                    Paragraph(
                        "Set engineering standards across client, backend, and ML so retailers can roll out scan-pay-go without ripping out existing POS.",
                        styles["bullet"],
                    )
                ),
            ],
            bulletType="bullet",
            leftIndent=12,
            bulletFontName="Times-Roman",
            bulletFontSize=10,
        ),
        Spacer(1, 6),
        Paragraph("INDEPENDENT VENTURE", styles["h"]),
        Paragraph("Founder &nbsp;—&nbsp; TAN Intelligence", styles["role"]),
        Paragraph("AI-powered forex trading indicator", styles["sub"]),
        Paragraph(
            "TAN Intelligence is an independent company building an original Artificial Intelligence trading indicator for the forex market. The longer system direction is indicator, then signals, then an automated bot with explicit risk controls. This is founder work, not a second employer.",
            styles["body"],
        ),
        Paragraph("SKILLS", styles["h"]),
        Paragraph(
            "<b>Mobile systems:</b> iOS, Android, Swift, Kotlin, Java, mobile architecture, sensor-connected clients",
            styles["body"],
        ),
        Paragraph(
            "<b>Backend &amp; scale:</b> REST APIs, distributed services, cloud, SQL, caching, CI/CD, observability",
            styles["body"],
        ),
        Paragraph(
            "<b>AI / ML:</b> computer vision, on-device inference, model architecture, master prompting, retail analytics",
            styles["body"],
        ),
        Paragraph(
            "<b>In-store systems:</b> scan-pay-go, POS integration, IoT &amp; beacons, weight sensors, in-aisle payments",
            styles["body"],
        ),
        Paragraph(
            "<b>Engineering craft:</b> SOLID, Git, Agile, system design, technical leadership",
            styles["body"],
        ),
        Paragraph("EDUCATION", styles["h"]),
        Paragraph("Bachelor of Engineering in Computer Science and Engineering", styles["role"]),
        Paragraph("Anna University Chennai", styles["sub"]),
        Paragraph("CERTIFICATIONS", styles["h"]),
        Paragraph("Mobile iOS &amp; Android development — Target Software, Chennai", styles["body"]),
        Paragraph("SOLID Principles — Coursera", styles["body"]),
        Paragraph("AI/ML Architecture — IBM", styles["body"]),
        Paragraph("Master prompting — Claude and Coursera", styles["body"]),
    ]
    doc.build(story)
    print(OUT)


if __name__ == "__main__":
    main()
