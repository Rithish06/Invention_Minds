import React from "react";
import styles from './PrivacyPolicy.module.css';
import Navbar from "../../Components/Navbar/Navbar";

export default function PrivacyPolicy() {
    return (
        <div className={styles.container}>
            <div className={styles.container}>
                <h1 className={styles.privacyPolicyHeading}>Privacy Policy - HR Minds</h1>

                <p className={styles.intro}>
                    At <strong>HR Minds</strong> (“HR Minds”, “we”, “our”, or “us”), we respect the privacy of organizations and individuals who use our software.
                    We are committed to protecting the confidentiality, integrity, and security of personal information processed through the HR Minds application.
                </p>

                <p className={styles.intro}>
                    HR Minds is an on-premise Human Resource Management System (HRMS).
                    All data processed through HR Minds is stored and managed on the client’s own server or infrastructure.
                </p>
                <p className={styles.intro}>HR Minds does not host, store, or control customer data on its own cloud servers.</p>

                <h2 className={styles.sectionHeading}>1. Scope of This Privacy Policy</h2>
                <p className={styles.sectionContent}>This Privacy Policy explains how information is handled when you use:</p>
                <ul>
                    <li className={styles.listItem}>The HR Minds web application</li>
                    <li className={styles.listItem}>The HR Minds mobile application</li>
                    <li className={styles.listItem}>Related HR Minds services and support channels</li>
                </ul>

                <p className={styles.sectionContent}>This policy applies to:</p>
                <ul>
                    <li className={styles.listItem}>Client organizations (“Customers”)</li>
                    <li className={styles.listItem}>End users, including employees, managers, HR personnel, and candidates who access
                        HR Minds on behalf of a Customer</li>
                </ul>

                <h2 className={styles.sectionHeading}>2. Data Ownership & Responsibility</h2>
                <ul>
                    <li className={styles.listItem}>The Client organization (Employer) is the Data Controller.</li>
                    <li className={styles.listItem}>HR Minds acts only as a software provider and data processor.</li>
                    <li className={styles.listItem}>All employee and organizational data remains the sole property of the Client.</li>
                    <li className={styles.listItem}>Data storage, backups, retention, and deletion are managed entirely on the Client’s
                        own server or infrastructure.</li>
                </ul>

                <p className={styles.sectionContent}>HR Minds does not access, use, or process client data outside the scope of providing
                    technical functionality and support, as agreed with the Client.</p>

                <h2 className={styles.sectionHeading}>3. Information Processed Through HR Minds</h2>
                <p className={styles.sectionContent}>HR Minds processes information strictly as configured by the Client. This may include:</p>

                <h3 className={styles.subHeading}>A. Employee & User Information</h3>
                <ul>
                    <li className={styles.listItem}>Full name</li>
                    <li className={styles.listItem}>Employee ID / employee code</li>
                    <li className={styles.listItem}>Department, designation, reporting manager</li>
                    <li className={styles.listItem}>Official email address and phone number</li>
                    <li className={styles.listItem}>Profile photograph (if uploaded)</li>
                    <li className={styles.listItem}>Date of joining and employment status</li>
                    <li className={styles.listItem}>Age and blood group (if enabled by employer)</li>
                    <li className={styles.listItem}>Emergency contact details</li>
                </ul>

                <h3 className={styles.subHeading}>B. Attendance & Work Information</h3>
                <ul>
                    <li className={styles.listItem}>Shift details and working hours</li>
                    <li className={styles.listItem}>Clock-in and clock-out timestamps</li>
                    <li className={styles.listItem}>Overtime records</li>
                    <li className={styles.listItem}>Attendance regularization requests</li>
                </ul>

                <h3 className={styles.subHeading}>C. Leave & Permission Information</h3>
                <ul>
                    <li className={styles.listItem}>Leave applications and leave types</li>
                    <li className={styles.listItem}>Permission requests (date, duration, reason)</li>
                    <li className={styles.listItem}>Leave balances and accruals</li>
                </ul>

                <h3 className={styles.subHeading}>D. Training, Tests & Appraisals</h3>
                <ul>
                    <li className={styles.listItem}>Training assignments and completion status</li>
                    <li className={styles.listItem}>Test attempts, scores, results, and violations (fullscreen exit, tab switch, etc.)</li>
                    <li className={styles.listItem}>Appraisal scores, feedback, remarks</li>
                    <li className={styles.listItem}>Department performance indicators</li>
                </ul>

                <h3 className={styles.subHeading}>E. Recruitment & Candidate Information</h3>
                <p className={styles.contact}>(Accessible only to authorized HR and managers)</p>
                <ul>
                    <li className={styles.listItem}>Candidate name, contact details, qualifications</li>
                    <li className={styles.listItem}>Resume uploads</li>
                    <li className={styles.listItem}>Interview schedules and evaluation feedback</li>
                </ul>

                <h3 className={styles.subHeading}>F. Grievances & POSH Information</h3>
                <ul>
                    <li className={styles.listItem}>Employee grievances and communications</li>
                    <li className={styles.listItem}>POSH complaints, hearings, notes, and outcomes</li>
                    <li className={styles.listItem}>Access to this data is strictly role-based and confidential</li>
                </ul>

                <h3 className={styles.subHeading}>G. System & Usage Logs</h3>
                <ul>
                    <li className={styles.listItem}>Login timestamps</li>
                    <li className={styles.listItem}>Action logs for audit and security</li>
                    <li className={styles.listItem}>IP address (for authentication and compliance)</li>
                </ul>

                <h2 className={styles.subHeading}>4. How Information Is Used</h2>
                <p className={styles.sectionContent}>Information processed through HR Minds is used only for:</p>
                <ul>
                    <li className={styles.listItem}>Employee self-service and HR operations</li>
                    <li className={styles.listItem}>Attendance, leave, permission, and shift management</li>
                    <li className={styles.listItem}>Training programs, tests, and appraisals</li>
                    <li className={styles.listItem}>Recruitment and interview workflows</li>
                    <li className={styles.listItem}>Grievance and POSH case handling</li>
                    <li className={styles.listItem}>Managerial approvals and HR reporting</li>
                    <li className={styles.listItem}>Audit trails, compliance, and system security</li>
                </ul>

                <p className={styles.highlight}>HR Minds does not sell data</p>
                <p className={styles.highlight}>HR Minds does not use data for advertising</p>
                <p className={styles.highlight}>HR Minds does not track users outside the application</p>

                <h2 className={styles.subHeading}>5. Mobile App Permissions</h2>
                <p className={styles.sectionContent}>The HR Minds mobile application may request the following permissions:</p>
                <ul>
                    <li className={styles.listItem}>Camera – to upload profile photos or documents (optional)</li>
                    <li className={styles.listItem}>Storage / Files – to upload resumes or HR documents</li>
                    <li className={styles.listItem}>Notifications – to send approvals, reminders, and announcements</li>
                </ul>

                <p className={styles.sectionContent}>These permissions are:</p>
                <ul>
                    <li className={styles.listItem}>Used only for app functionality</li>
                    <li className={styles.listItem}>Optional where applicable</li>
                    <li className={styles.listItem}>Not used for background surveillance or analytics</li>
                </ul>

                <h2 className={styles.subHeading}>6. Data Storage & Hosting</h2>
                <ul>
                    <li className={styles.listItem}>All HR Minds data is stored on the Client’s own server, database, or infrastructure.</li>
                    <li className={styles.listItem}>HR Minds does not host data on public or private cloud platforms.</li>
                    <li className={styles.listItem}>Backup, recovery, and retention policies are defined and managed by the Client.</li>
                </ul>

                <h2 className={styles.subHeading}>7. Data Sharing & Disclosure</h2>
                <p className={styles.sectionContent}>
                    HR Minds does not share personal data with third parties, except:
                </p>
                <ul>
                    <li className={styles.listItem}>When explicitly configured by the Client</li>
                    <li className={styles.listItem}>When required by law or legal authority</li>
                    <li className={styles.listItem}>When providing technical support, strictly under Client authorization</li>
                </ul>
                <p className={styles.sectionContent}>Any third-party integrations used by the Client are governed by the Client’s own agreements and
                    privacy policies.</p>

                <h2 className={styles.subHeading}>8. Security Measures</h2>
                <p className={styles.sectionContent}>HR Minds implements strong application-level security features, including:</p>
                <ul>
                    <li className={styles.listItem}>Role-based access control</li>
                    <li className={styles.listItem}>Authentication and authorization controls</li>
                    <li className={styles.listItem}>Activity logs and audit trails</li>
                    <li className={styles.listItem}>Restricted access based on user roles</li>
                </ul>

                <p className={styles.sectionContent}>The Client is responsible for:</p>
                <ul>
                    <li className={styles.listItem}>Server security</li>
                    <li className={styles.listItem}>Network security</li>
                    <li className={styles.listItem}>Data backups</li>
                    <li className={styles.listItem}>Infrastructure-level protections</li>
                </ul>

                <h2 className={styles.subHeading}>9. User Rights</h2>
                <p className={styles.sectionContent}>Subject to applicable laws and organizational policies, users may have the right to:</p>
                <ul>
                    <li className={styles.listItem}>Access their personal information</li>
                    <li className={styles.listItem}>Request correction of inaccurate data</li>
                    <li className={styles.listItem}>Request deletion or restriction of data</li>
                </ul>
                <p className={styles.sectionContent}>Such requests must be raised through the Client organization, as the Data Controller.</p>

                <h2 className={styles.subHeading}>10. POSH & Sensitive Information</h2>
                <p className={styles.sectionContent}>POSH and sensitive grievance data are handled with:</p>
                <ul>
                    <li className={styles.listItem}>Strict confidentiality</li>
                    <li className={styles.listItem}>Limited access to authorized personnel</li>
                    <li className={styles.listItem}>Audit logging for compliance</li>
                </ul>
                <p className={styles.sectionContent}>HR Minds provides the technical framework; the Client controls all access and decisions.</p>

                <h2 className={styles.subHeading}>11. Children’s Privacy</h2>
                <p className={styles.sectionContent}>
                    HR Minds is intended for organizational and professional use only.
                    We do not knowingly collect or process data of individuals under 18 years of age.
                </p>

                <h2 className={styles.subHeading}>12. Changes to This Privacy Policy</h2>
                <p className={styles.sectionContent}>This Privacy Policy may be updated from time to time. The latest version will be published on
                    the official HR Minds website. Continued use of the application indicates acceptance of the
                    updated policy.</p>
                <h2 className={styles.subHeading}>13. Account Deactivation and Data Management</h2>
                <p className={styles.sectionContent}>This application is intended for authorized users managed by an organization.
                </p>
                <p className={styles.sectionContent}>User accounts are created, managed, and deactivated by the organization’s administrator.
                    Individual users do not have the ability to delete or deactivate their accounts directly within the
                    application.
                </p>
                <p className={styles.sectionContent}>If an employee leaves the organization or no longer requires access, the administrator will
                    deactivate the account, which immediately restricts access to the application.
                </p>
                <p className={styles.sectionContent}>After deactivation, user data such as mobile number, email address, and internal employee
                    details is retained securely and not used for active processing, except where required for
                    operational, legal, security, or audit purposes</p>
                <p className={styles.sectionContent}>For any account-related concerns, users should contact their organization’s administrator or
                    reach out to us at <a href="mailto:inventionmindsblr@gmail.com">
                         inventionmindsblr@gmail.com
                    </a></p>

                <h2 className={styles.subHeading}>14. Contact Information</h2>
                <p>For questions related to this Privacy Policy or data handling:</p>
                <p className={styles.contact}>
                    HR Minds Support <br />
                    <a href="mailto:inventionmindsblr@gmail.com">
                         inventionmindsblr@gmail.com
                    </a>

                </p>
            </div>
        </div>
    );
}