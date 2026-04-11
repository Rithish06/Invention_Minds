import React, { useEffect, useRef, useState } from 'react'
import './Products.css'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import ContactPageBanner from '../../Components/ContactPageBanner/ContactPageBanner'

const products = [
  {
    id: 'docminds',
    name: 'DocMinds',
    tagline: 'Hospital Management System',
    description: 'A complete Hospital Management System designed to streamline and digitize the day-to-day clinical and administrative operations of hospitals and clinics. Covers patient registration, OPD appointments, doctor scheduling, billing, lab & radiology orders, nursing vitals, operating theatre scheduling, and multi-channel patient communication via WhatsApp, SMS, and Email.',
    gradient: 'linear-gradient(135deg, #1a5276 0%, #2e86c1 50%, #5dade2 100%)',
    accentColor: '#2e86c1',
    icon: 'fas fa-hospital',
    stats: [
      { number: '22+', label: 'Modules' },
      { number: '12', label: 'User Roles' },
      { number: '4', label: 'Communication Channels' },
    ],
    features: [
      { icon: 'fas fa-calendar-check', title: 'Appointment Management', desc: 'End-to-end patient appointment lifecycle — booking, confirmation, check-in, consultation, and completion with real-time queue tracking.' },
      { icon: 'fas fa-user-md', title: 'Doctor & Patient Management', desc: 'Doctor scheduling, availability, leave management, digital signatures. Centralized patient registry with appointment history and vitals.' },
      { icon: 'fas fa-heartbeat', title: 'Health Checkup (MHC)', desc: 'Master Health Checkup packages with multi-station tracking across Lab, Radiology, ECG, Ultrasound, and Mammography stations.' },
      { icon: 'fas fa-file-invoice-dollar', title: 'Estimation & Billing', desc: 'Procedure cost estimations with room charges, doctor fees, and investigation costs. Approval workflow, PDF generation, and payment collection.' },
      { icon: 'fas fa-flask', title: 'Lab & Radiology Services', desc: 'Lab test ordering with coordinator dashboard. Radiology scan requests, scheduling, and real-time queue for X-ray, CT, MRI, and Ultrasound.' },
      { icon: 'fas fa-procedures', title: 'OT Management', desc: 'Operating theatre surgery scheduling with dedicated OT board, surgeon assignment, and live surgery status display on wall-mounted TVs.' },
      { icon: 'fas fa-spa', title: 'Ayurveda Therapy', desc: 'Therapy session booking with 75-minute slots, therapist management, room assignment, slot conflict detection, and therapy analytics.' },
      { icon: 'fas fa-prescription', title: 'Prescriptions & Clinical Assessments', desc: 'Digital prescriptions with medicine database, OPD/ER assessment forms, ophthalmology templates, and handwritten note capture.' },
      { icon: 'fas fa-user-nurse', title: 'Nursing & Vitals', desc: 'Recording patient vitals — BP, pulse, temperature, SpO2, weight, height, and blood sugar levels linked to appointments for doctor review.' },
    ],
    highlights: [
      'WhatsApp, SMS & Email patient notifications',
      'Real-time queue & TV display system',
      'Blood donation program & Day Care management',
      'Automated appointment reminders',
      'Built-in analytics & downloadable reports',
      'Role-based access for 12 user roles',
    ],
  },
  {
    id: 'hrminds',
    name: 'HR MINDS',
    tagline: 'Human Resource Management System',
    description: 'A comprehensive HRMS designed for modern enterprises covering the complete employee lifecycle from recruitment to exit. Features multi-level approval workflows, biometric attendance integration, automated leave management, and performance tracking.',
    gradient: 'linear-gradient(135deg, #7b4397 0%, #dc2430 100%)',
    accentColor: '#dc2430',
    icon: 'fas fa-users-cog',
    stats: [
      { number: '15+', label: 'Core Modules' },
      { number: '5', label: 'User Roles' },
      { number: '7', label: 'Leave Types' },
    ],
    features: [
      { icon: 'fas fa-fingerprint', title: 'Biometric Attendance', desc: 'COSEC integration with auto-sync, late login detection, night shift support, and auto-cancel leave on presence.' },
      { icon: 'fas fa-calendar-minus', title: 'Leave Management', desc: 'CL, SL, EL, CO, RH, ML, PL with multi-level approval, balance tracking, accrual rules, and encashment.' },
      { icon: 'fas fa-chart-line', title: 'Performance & Appraisal', desc: 'Annual appraisal with parallel self + manager review, 9 criteria scoring, and edit request workflow.' },
      { icon: 'fas fa-star-half-alt', title: 'Weekly Performance Rating', desc: 'Managers rate team weekly on 1-10 scale with color-coded scores, draft/submit workflow, and monthly trends.' },
      { icon: 'fas fa-money-bill-wave', title: 'Payroll & Salary', desc: 'Salary structure configuration, monthly payroll run, attendance-based computation, and payslip generation.' },
      { icon: 'fas fa-user-plus', title: 'Recruitment', desc: 'Job posting, candidate pipeline, manpower requisition, interview scheduling, and online skill tests.' },
      { icon: 'fas fa-graduation-cap', title: 'Training Management', desc: 'Create training programs, assign employees, track attendance, and collect post-training feedback.' },
      { icon: 'fas fa-sign-out-alt', title: 'Resignation & Exit', desc: 'Notice period tracking, department clearance workflow, exit interviews, and full offboarding process.' },
      { icon: 'fas fa-shield-alt', title: 'Compliance & Feedback', desc: 'Incident reporting, grievance management, POSH compliance, and employee surveys.' },
    ],
    highlights: [
      'Multi-level approval workflows',
      'Automated EL accrual & FY rollover',
      'Real-time push notifications',
      'Comprehensive data export to Excel',
      'Mobile app support (Android/iOS)',
      'Shift management & rotation',
    ],
  },
  {
    id: 'smartassets',
    name: 'Smart Assets',
    tagline: 'Enterprise Asset Management System',
    description: 'An enterprise-grade fixed asset management system designed to track, manage, and report on the complete lifecycle of organizational assets from procurement through depreciation, maintenance, and final disposal. QR code tracking, automated alerts, and compliance reporting.',
    gradient: 'linear-gradient(135deg, #0a5c36 0%, #00a23d 50%, #5ef09a 100%)',
    accentColor: '#00a23d',
    icon: 'fas fa-cogs',
    stats: [
      { number: '23', label: 'Modules' },
      { number: '4', label: 'User Roles' },
      { number: '6', label: 'Report Types' },
    ],
    features: [
      { icon: 'fas fa-qrcode', title: 'Asset Master & QR Codes', desc: 'Register every asset with unique ID, QR code generation, bulk import, and real-time tracking of custody and condition.' },
      { icon: 'fas fa-tools', title: 'Ticket for Repair', desc: 'End-to-end repair lifecycle with SLA tracking, escalation matrix, root cause analysis, and knowledge base integration.' },
      { icon: 'fas fa-calendar-alt', title: 'Preventive Maintenance', desc: 'Calendar-based scheduling with color-coded statuses, overdue alerts, and complete maintenance history logging.' },
      { icon: 'fas fa-chart-area', title: 'Batch Depreciation', desc: 'Automated monthly/annual depreciation with Straight Line, Declining Balance, and WDV methods. Preview before applying.' },
      { icon: 'fas fa-file-contract', title: 'Warranty & Insurance', desc: 'Track warranties and insurance policies with automated 30-day expiry alerts, renewal workflows, and claims management.' },
      { icon: 'fas fa-handshake', title: 'Service Contracts', desc: 'AMC/CMC contract management with vendor linking, coverage tracking, and automated expiry notifications.' },
      { icon: 'fas fa-star', title: 'Vendor Performance', desc: 'Live scorecard derived from maintenance and ticket data with response time, SLA compliance, and cost metrics.' },
      { icon: 'fas fa-clipboard-check', title: 'Physical Audit', desc: 'QR-based physical verification with audit sessions, VERIFIED/MISSING/EXCESS tracking, and compliance reports.' },
      { icon: 'fas fa-rupee-sign', title: 'Financial Dashboard', desc: 'Total asset value, book value, accumulated depreciation, department-wise breakdowns, and maintenance spend trends.' },
    ],
    highlights: [
      'QR code-based asset tracking',
      'Automated SLA breach detection',
      'Knowledge base from resolved tickets',
      'Industry compliance & audit support',
      'Email alerts via configurable SMTP',
      'Granular module access control',
    ],
  },
  {
    id: 'docminds-emr',
    name: 'DocMinds EMR',
    tagline: 'Electronic Medical Records System',
    description: 'A complete Electronic Medical Records system for hospitals covering structured clinical documentation, standardized ICD-10 diagnosis coding, full inpatient management with admission-discharge-transfer, comprehensive lab & radiology result tracking, advanced nursing workflows, and patient-centric medical records. Designed for OPD + IPD healthcare operations with HMIS compliance.',
    gradient: 'linear-gradient(135deg, #1b4332 0%, #2d6a4f 50%, #40916c 100%)',
    accentColor: '#40916c',
    icon: 'fas fa-notes-medical',
    stats: [
      { number: '50+', label: 'Clinical Modules' },
      { number: '4', label: 'Deployment Phases' },
      { number: '15', label: 'Core Features' },
    ],
    features: [
      { icon: 'fas fa-file-medical', title: 'SOAP Clinical Notes', desc: 'Structured Subjective-Objective-Assessment-Plan documentation with doctor-specific templates, department templates, and condition-specific pre-fills for faster clinical recording.' },
      { icon: 'fas fa-diagnoses', title: 'ICD-10 Diagnosis & Problem List', desc: 'Searchable ICD-10 master with auto-suggest. Persistent patient problem list tracking Active, Resolved, and Chronic conditions across all visits.' },
      { icon: 'fas fa-pills', title: 'Active Medication & Drug-Allergy Safety', desc: 'Cross-visit active medication tracking preventing duplicate prescribing. Automatic drug-allergy cross-check with severity-based visual alerts when prescribing.' },
      { icon: 'fas fa-bed', title: 'ADT - Admission, Discharge & Transfer', desc: 'Complete inpatient management — ward/bed assignment, real-time bed occupancy dashboard, patient transfers, wristband generation, and multiple discharge types (Normal/LAMA/DAMA).' },
      { icon: 'fas fa-file-medical-alt', title: 'Discharge Summary', desc: 'Structured discharge documents with ICD-10 diagnosis, procedures performed, discharge medications, follow-up plans, and department-wise templates with auto-PDF generation.' },
      { icon: 'fas fa-user-nurse', title: 'Advanced Nursing Module', desc: 'OPD triage with acuity scoring, fall risk & pressure injury assessment, medication administration records (MAR), diet sheet management, nursing handover, and discharge checklists.' },
      { icon: 'fas fa-vials', title: 'Lab Information System (LIS)', desc: 'Full lab order lifecycle — Ordered to Sample Collected to Processing to Verified. Result storage with normal/abnormal/critical flags, trend charts, and critical value auto-alerts to doctors.' },
      { icon: 'fas fa-x-ray', title: 'Radiology Information System (RIS)', desc: 'Radiology order tracking from scheduling to reporting. Findings and impression storage, report PDFs, and optional DICOM image viewer integration.' },
      { icon: 'fas fa-certificate', title: 'Medical Records & Certificates', desc: 'Auto-generated birth and death certificates, MLC register with police intimation tracking, disease-wise statistics, and mortality/morbidity reporting for compliance.' },
    ],
    highlights: [
      'SOAP clinical documentation standard',
      'ICD-10 coded diagnosis for HMIS compliance',
      'Real-time bed occupancy & ward dashboard',
      'Critical lab value auto-alerts to doctors',
      'Blood sugar monitoring with trend charts',
      'Vaccination tracking with patient reminders',
    ],
  },
]

const Products = () => {
  const [activeProduct, setActiveProduct] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const sectionRefs = useRef([])
  const heroRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [counters, setCounters] = useState({})

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.15 }
    )

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        setMousePos({
          x: (e.clientX - rect.left - rect.width / 2) / rect.width,
          y: (e.clientY - rect.top - rect.height / 2) / rect.height,
        })
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Animated counter
  useEffect(() => {
    products.forEach((product) => {
      if (isVisible[product.id]) {
        product.stats.forEach((stat, i) => {
          const target = parseInt(stat.number)
          if (isNaN(target)) return
          const key = `${product.id}-${i}`
          if (counters[key] >= target) return
          let current = 0
          const increment = Math.max(1, Math.floor(target / 40))
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              current = target
              clearInterval(timer)
            }
            setCounters((prev) => ({ ...prev, [key]: current }))
          }, 30)
        })
      }
    })
  }, [isVisible])

  const getCounterDisplay = (productId, index, stat) => {
    const key = `${productId}-${index}`
    const val = counters[key]
    if (val !== undefined) {
      return stat.number.includes('+') ? `${val}+` : `${val}`
    }
    return '0'
  }

  return (
    <>
      <Helmet>
        <title>Our Products | Invention Minds - DocMinds, HR MINDS, Smart Assets</title>
        <meta
          name="description"
          content="Explore Invention Minds' product suite: DocMinds HMS, HR MINDS HRMS, Smart Assets, and DocMinds EMR - comprehensive enterprise software solutions for modern organizations."
        />
        <meta
          name="keywords"
          content="Hospital Management System, HRMS, Asset Management, EMR, DocMinds, HR MINDS, Smart Assets, Enterprise Software, Invention Minds Products"
        />
      </Helmet>

      {/* ===== HERO SECTION ===== */}
      <div className="products_hero" ref={heroRef}>
        <div className="products_hero_bg">
          <div className="products_hero_orb products_hero_orb_1"></div>
          <div className="products_hero_orb products_hero_orb_2"></div>
          <div className="products_hero_orb products_hero_orb_3"></div>
          <div className="products_hero_grid"></div>
        </div>
        <div className="products_hero_content">
          <div className="products_hero_badge">Our Product Suite</div>
          <h1 className="products_hero_title">
            Powering Enterprises with
            <span className="products_hero_gradient"> Intelligent Solutions</span>
          </h1>
          <p className="products_hero_subtitle">
            Comprehensive software products designed for modern organizations —
            from clinical operations and human resources to asset management and medical records.
          </p>
          <div className="products_hero_cards">
            {products.map((product, index) => (
              <div
                className={`products_hero_card ${activeProduct === index ? 'products_hero_card_active' : ''}`}
                key={product.id}
                onClick={() => {
                  setActiveProduct(index)
                  document.getElementById(product.id)?.scrollIntoView({ behavior: 'smooth' })
                }}
                style={{
                  transform: `perspective(1000px) rotateY(${mousePos.x * 5}deg) rotateX(${-mousePos.y * 5}deg) translateZ(${activeProduct === index ? '30px' : '0px'})`,
                  background: activeProduct === index ? product.gradient : 'rgba(255,255,255,0.05)',
                }}
              >
                <div className="products_hero_card_icon">
                  <i className={product.icon}></i>
                </div>
                <h3 className="products_hero_card_name">{product.name}</h3>
                <p className="products_hero_card_tagline">{product.tagline}</p>
                <div className="products_hero_card_arrow">
                  <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="products_hero_scroll_indicator">
          <div className="products_hero_scroll_mouse">
            <div className="products_hero_scroll_wheel"></div>
          </div>
          <span>Scroll to explore</span>
        </div>
      </div>

      {/* ===== PRODUCT SECTIONS ===== */}
      {products.map((product, pIndex) => (
        <section
          className={`product_section ${isVisible[product.id] ? 'product_section_visible' : ''}`}
          id={product.id}
          key={product.id}
          ref={(el) => (sectionRefs.current[pIndex] = el)}
        >
          {/* Product Header */}
          <div className="product_header">
            <div className="product_header_bg" style={{ background: product.gradient }}></div>
            <div className="product_header_content">
              <div className="product_header_left">
                <div className="product_number">{String(pIndex + 1).padStart(2, '0')}</div>
                <div className="product_icon_3d" style={{ background: product.gradient }}>
                  <i className={product.icon}></i>
                </div>
                <h2 className="product_name">{product.name}</h2>
                <div className="product_tagline_badge" style={{ borderColor: product.accentColor, color: product.accentColor }}>
                  {product.tagline}
                </div>
                <p className="product_description">{product.description}</p>
                <Link to="/contact-us" style={{ textDecoration: 'none' }}>
                  <button className="product_cta_btn" style={{ background: product.gradient }}>
                    Request Demo <i className="fas fa-arrow-right"></i>
                  </button>
                </Link>
              </div>
              <div className="product_header_right">
                <div className="product_stats_container">
                  {product.stats.map((stat, i) => (
                    <div className="product_stat_card" key={i} style={{ animationDelay: `${i * 0.2}s` }}>
                      <div className="product_stat_number" style={{ color: product.accentColor }}>
                        {getCounterDisplay(product.id, i, stat)}
                      </div>
                      <div className="product_stat_label">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <div className="product_floating_shape product_floating_shape_1" style={{ background: product.gradient }}></div>
                <div className="product_floating_shape product_floating_shape_2" style={{ background: product.gradient }}></div>
                <div className="product_floating_shape product_floating_shape_3" style={{ borderColor: product.accentColor }}></div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="product_features_section">
            <h3 className="product_features_title">
              <span style={{ color: product.accentColor }}>Key</span> Features
            </h3>
            <div className="product_features_grid">
              {product.features.map((feature, fIndex) => (
                <div
                  className="product_feature_card"
                  key={fIndex}
                  style={{
                    animationDelay: `${fIndex * 0.1}s`,
                    '--accent': product.accentColor,
                  }}
                >
                  <div className="product_feature_icon" style={{ background: product.gradient }}>
                    <i className={feature.icon}></i>
                  </div>
                  <h4 className="product_feature_title">{feature.title}</h4>
                  <p className="product_feature_desc">{feature.desc}</p>
                  <div className="product_feature_glow" style={{ background: product.accentColor }}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="product_highlights_section">
            <div className="product_highlights_content">
              <h3 className="product_highlights_title">
                Why Choose <span style={{ color: product.accentColor }}>{product.name}</span>?
              </h3>
              <div className="product_highlights_grid">
                {product.highlights.map((highlight, hIndex) => (
                  <div className="product_highlight_item" key={hIndex} style={{ animationDelay: `${hIndex * 0.1}s` }}>
                    <div className="product_highlight_check" style={{ background: product.gradient }}>
                      <i className="fas fa-check"></i>
                    </div>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="product_highlights_visual">
              <div className="product_3d_cube" style={{ '--cube-color': product.accentColor }}>
                <div className="cube_face cube_front"><i className={product.icon}></i></div>
                <div className="cube_face cube_back"><i className="fas fa-check-circle"></i></div>
                <div className="cube_face cube_right"><i className="fas fa-chart-line"></i></div>
                <div className="cube_face cube_left"><i className="fas fa-shield-alt"></i></div>
                <div className="cube_face cube_top"><i className="fas fa-bolt"></i></div>
                <div className="cube_face cube_bottom"><i className="fas fa-cloud"></i></div>
              </div>
            </div>
          </div>

          {/* Divider */}
          {pIndex < products.length - 1 && (
            <div className="product_divider">
              <div className="product_divider_line" style={{ background: product.gradient }}></div>
            </div>
          )}
        </section>
      ))}

      {/* ===== CTA SECTION ===== */}
      <div className="products_cta_section">
        <div className="products_cta_bg">
          <div className="products_cta_orb products_cta_orb_1"></div>
          <div className="products_cta_orb products_cta_orb_2"></div>
        </div>
        <div className="products_cta_content">
          <h2 className="products_cta_title">Ready to Transform Your Business Operations?</h2>
          <p className="products_cta_subtitle">
            Get a personalized demo of our product suite tailored to your organization's needs.
          </p>
          <div className="products_cta_buttons">
            <Link to="/contact-us" style={{ textDecoration: 'none' }}>
              <button className="products_cta_btn_primary">
                Schedule a Demo <i className="fas fa-arrow-right"></i>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="h_form_container">
        <ContactPageBanner />
      </div>
    </>
  )
}

export default Products
