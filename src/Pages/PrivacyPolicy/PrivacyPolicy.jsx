import React from "react";
import "./PrivacyPolicy.css";
import Navbar from "../../Components/Navbar/Navbar";

export default function PrivacyPolicy() {
    return (
        <div >
            <div className="container">
                <h1>Privacy Policy - HR Minds</h1>

                <p>
                    At <strong>HR Minds</strong> (“HR Minds”, “we”, “our”, or “us”), we respect the privacy of organizations and individuals who use our software.
                    We are committed to protecting the confidentiality, integrity, and security of personal information processed through the HR Minds application.
                </p>

                <p>
                    HR Minds is an on-premise Human Resource Management System (HRMS).
                    All data processed through HR Minds is stored and managed on the client’s own server or infrastructure.
                </p>
                <p>HR Minds does not host, store, or control customer data on its own cloud servers.</p>

                <h2>1. Scope of This Privacy Policy</h2>
                <p>This Privacy Policy explains how information is handled when you use:</p>
                <ul>
                    <li>The HR Minds web application</li>
                    <li>The HR Minds mobile application</li>
                    <li>Related HR Minds services and support channels</li>
                </ul>

                <p>This policy applies to:</p>
                <ul>
                    <li>Client organizations (“Customers”)</li>
                    <li>End users, including employees, managers, HR personnel, and candidates who access
                        HR Minds on behalf of a Customer</li>
                </ul>

                <h2>2. Data Ownership & Responsibility</h2>
                <ul>
                    <li>The Client organization (Employer) is the Data Controller.</li>
                    <li>HR Minds acts only as a software provider and data processor.</li>
                    <li>All employee and organizational data remains the sole property of the Client.</li>
                    <li>Data storage, backups, retention, and deletion are managed entirely on the Client’s
                        own server or infrastructure.</li>
                </ul>

                <p>HR Minds does not access, use, or process client data outside the scope of providing
                    technical functionality and support, as agreed with the Client.</p>

                <h2>3. Information Processed Through HR Minds</h2>
                <p>HR Minds processes information strictly as configured by the Client. This may include:</p>

                <h3>A. Employee & User Information</h3>
                <ul>
                    <li>Full name</li>
                    <li>Employee ID / employee code</li>
                    <li>Department, designation, reporting manager</li>
                    <li>Official email address and phone number</li>
                    <li>Profile photograph (if uploaded)</li>
                    <li>Date of joining and employment status</li>
                    <li>Age and blood group (if enabled by employer)</li>
                    <li> Emergency contact details</li>
                </ul>

                <h3>B. Attendance & Work Information</h3>
                <ul>
                    <li>Shift details and working hours</li>
                    <li>Clock-in and clock-out timestamps</li>
                    <li>Overtime records</li>
                    <li>Attendance regularization requests</li>
                </ul>

                <h3>C. Leave & Permission Information</h3>
                <ul>
                    <li>Leave applications and leave types</li>
                    <li>Permission requests (date, duration, reason)</li>
                    <li>Leave balances and accruals</li>
                </ul>

                <h3>D. Training, Tests & Appraisals</h3>
                <ul>
                    <li> Training assignments and completion status</li>
                    <li>Test attempts, scores, results, and violations (fullscreen exit, tab switch, etc.)</li>
                    <li>Appraisal scores, feedback, remarks</li>
                    <li>Department performance indicators</li>
                </ul>

                <h3>E. Recruitment & Candidate Information</h3>
                <p>(Accessible only to authorized HR and managers)</p>
                <ul>
                    <li>Candidate name, contact details, qualifications</li>
                    <li>Resume uploads</li>
                    <li>Interview schedules and evaluation feedback</li>
                </ul>

                <h3>F. Grievances & POSH Information</h3>
                <ul>
                    <li>Employee grievances and communications</li>
                    <li>POSH complaints, hearings, notes, and outcomes</li>
                    <li>Access to this data is strictly role-based and confidential</li>
                </ul>

                <h3>G. System & Usage Logs</h3>
                <ul>
                    <li>Login timestamps</li>
                    <li>Action logs for audit and security</li>
                    <li>IP address (for authentication and compliance)</li>
                </ul>

                <h2>4. How Information Is Used</h2>
                <p>Information processed through HR Minds is used only for:</p>
                <ul>
                    <li>Employee self-service and HR operations</li>
                    <li>Attendance, leave, permission, and shift management</li>
                    <li>Training programs, tests, and appraisals</li>
                    <li>Recruitment and interview workflows</li>
                    <li>Grievance and POSH case handling</li>
                    <li>Managerial approvals and HR reporting</li>
                    <li>Audit trails, compliance, and system security</li>
                </ul>

                <p class="highlight">HR Minds does not sell data</p>
                <p class="highlight">HR Minds does not use data for advertising</p>
                <p class="highlight">HR Minds does not track users outside the application</p>

                <h2>5. Mobile App Permissions</h2>
                <p>The HR Minds mobile application may request the following permissions:</p>
                <ul>
                    <li>Camera – to upload profile photos or documents (optional)</li>
                    <li>Storage / Files – to upload resumes or HR documents</li>
                    <li>Notifications – to send approvals, reminders, and announcements</li>
                </ul>

                <p>These permissions are:</p>
                <ul>
                    <li>Used only for app functionality</li>
                    <li>Optional where applicable</li>
                    <li>Not used for background surveillance or analytics</li>
                </ul>

                <h2>6. Data Storage & Hosting</h2>
                <ul>
                    <li>All HR Minds data is stored on the Client’s own server, database, or infrastructure.</li>
                    <li>HR Minds does not host data on public or private cloud platforms.</li>
                    <li>Backup, recovery, and retention policies are defined and managed by the Client.</li>
                </ul>

                <h2>7. Data Sharing & Disclosure</h2>
                <p>
                    HR Minds does not share personal data with third parties, except:
                </p>
                <ul>
                    <li>When explicitly configured by the Client</li>
                    <li>When required by law or legal authority</li>
                    <li>When providing technical support, strictly under Client authorization</li>
                </ul>
                <p>Any third-party integrations used by the Client are governed by the Client’s own agreements and
                    privacy policies.</p>

                <h2>8. Security Measures</h2>
                <p>HR Minds implements strong application-level security features, including:</p>
                <ul>
                    <li>Role-based access contro</li>
                    <li>Authentication and authorization controls</li>
                    <li>Activity logs and audit trails</li>
                    <li>Restricted access based on user roles</li>
                </ul>

                <p>The Client is responsible for:</p>
                <ul>
                    <li>Server security</li>
                    <li>Network security</li>
                    <li>Data backups</li>
                    <li>Infrastructure-level protections</li>
                </ul>

                <h2>9. User Rights</h2>
                <p>Subject to applicable laws and organizational policies, users may have the right to:</p>
                <ul>
                    <li>Access their personal information</li>
                    <li>Request correction of inaccurate data</li>
                    <li>Request deletion or restriction of data</li>
                </ul>
                <p>Such requests must be raised through the Client organization, as the Data Controller.</p>

                <h2>10. POSH & Sensitive Information</h2>
                <p>POSH and sensitive grievance data are handled with:</p>
                <ul>
                    <li>Strict confidentiality</li>
                    <li>Limited access to authorized personnel</li>
                    <li>Audit logging for compliance</li>
                </ul>
                <p>HR Minds provides the technical framework; the Client controls all access and decisions.</p>

                <h2>11. Children’s Privacy</h2>
                <p>
                    HR Minds is intended for organizational and professional use only.
                    We do not knowingly collect or process data of individuals under 18 years of age.
                </p>

                <h2>12. Changes to This Privacy Policy</h2>
                <p>This Privacy Policy may be updated from time to time. The latest version will be published on
                    the official HR Minds website. Continued use of the application indicates acceptance of the
                    updated policy.</p>
                <h2>13. Account Deactivation and Data Management</h2>
                <p>This application is intended for authorized users managed by an organization.
                </p>
                <p>User accounts are created, managed, and deactivated by the organization’s administrator.
                    Individual users do not have the ability to delete or deactivate their accounts directly within the
                    application.
                </p>
                <p>If an employee leaves the organization or no longer requires access, the administrator will
                    deactivate the account, which immediately restricts access to the application.
                </p>
                <p>After deactivation, user data such as mobile number, email address, and internal employee
                    details is retained securely and not used for active processing, except where required for
                    operational, legal, security, or audit purposes</p>
                <p>For any account-related concerns, users should contact their organization’s administrator or
                    reach out to us at <a href="mailto:inventionmindsblr@gmail.com">
                        📧 inventionmindsblr@gmail.com
                    </a></p>

                <h2>14. Contact Information</h2>
                <p>For questions related to this Privacy Policy or data handling:</p>
                <p class="contact">
                    HR Minds Support <br />
                    <a href="mailto:inventionmindsblr@gmail.com">
                        📧 inventionmindsblr@gmail.com
                    </a>

                </p>
            </div>
        </div>
    );
}