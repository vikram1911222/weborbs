import React from 'react';
import Link from 'next/link';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-white mt-8 py-12 px-4 sm:px-6 lg:px-8 text-gray-800 font-sans text-sm md:text-base leading-relaxed">
            <div className="max-w-4xl mx-auto space-y-6">

                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-2xl md:text-3xl font-bold mb-2 uppercase">PRIVACY POLICY</h1>
                    <p className="text-gray-500">Last updated June 01, 2026</p>
                </div>

                {/* Intro */}
                <div className="space-y-4">
                    <p>
                        This Privacy Notice for vooklu ("<strong>we</strong>," "<strong>us</strong>," or "<strong>our</strong>"), describes how and why we might access, collect, store, use, and/or share ("<strong>process</strong>") your personal information when you use our services ("<strong>Services</strong>"), including when you:
                    </p>
                    <ul className="list-disc pl-8 space-y-2">
                        <li>
                            Visit our website at <a href="http://www.vooklu.com" className="text-blue-600 hover:underline break-all" target="_blank" rel="noopener noreferrer">http://www.vooklu.com</a> or any website of ours that links to this Privacy Notice
                        </li>
                        <li>
                            Use web design and development. A premium web design and development studio that engineers high-performance, SEO-optimized websites and custom digital business systems.
                        </li>
                        <li>
                            Engage with us in other related ways, including any marketing or events
                        </li>
                    </ul>
                    <p>
                        <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:support@vooklu.com" className="text-blue-600 hover:underline">support@vooklu.com</a> or <a href="mailto:vikram@vooklu.com" className="text-blue-600 hover:underline">vikram@vooklu.com</a>.
                    </p>
                </div>

                {/* Summary of Key Points */}
                <div className="space-y-4 pt-6">
                    <h2 className="text-xl font-bold uppercase">SUMMARY OF KEY POINTS</h2>
                    <p className="italic">
                        This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.
                    </p>
                    <ul className="list-none space-y-4">
                        <li>
                            <strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about <a href="#personal-info" className="text-blue-600 hover:underline">personal information you disclose to us</a>.
                        </li>
                        <li>
                            <strong>Do we process any sensitive personal information?</strong> Some of the information may be considered "special" or "sensitive" in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs. We do not process sensitive personal information.
                        </li>
                        <li>
                            <strong>Do we collect any information from third parties?</strong> We do not collect any information from third parties.
                        </li>
                        <li>
                            <strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about <a href="#process-info" className="text-blue-600 hover:underline">how we process your information</a>.
                        </li>
                        <li>
                            <strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties. Learn more about <a href="#share-info" className="text-blue-600 hover:underline">when and with whom we share your personal information</a>.
                        </li>
                        <li>
                            <strong>How do we keep your information safe?</strong> We have adequate organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about <a href="#safe-info" className="text-blue-600 hover:underline">how we keep your information safe</a>.
                        </li>
                        <li>
                            <strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about <a href="#privacy-rights" className="text-blue-600 hover:underline">your privacy rights</a>.
                        </li>
                        <li>
                            <strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by submitting a <a href="https://app.termly.io/dsar/77e6945e-7302-464d-9f" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">data subject access request</a>, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
                        </li>
                        <li>
                            Want to learn more about what we do with any information we collect? <a href="#full-notice" className="text-blue-600 hover:underline">Review the Privacy Notice in full</a>.
                        </li>
                    </ul>
                </div>

                {/* Table of Contents */}
                <div className="py-6" id="table-of-contents">
                    <h2 className="text-xl font-bold mb-4 uppercase">TABLE OF CONTENTS</h2>
                    <ol className="list-decimal list-inside space-y-2">
                        <li><a href="#section-1" className="text-blue-600 hover:underline">WHAT INFORMATION DO WE COLLECT?</a></li>
                        <li><a href="#section-2" className="text-blue-600 hover:underline">HOW DO WE PROCESS YOUR INFORMATION?</a></li>
                        <li><a href="#section-3" className="text-blue-600 hover:underline">WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</a></li>
                        <li><a href="#section-4" className="text-blue-600 hover:underline">WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a></li>
                        <li><a href="#section-5" className="text-blue-600 hover:underline">DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</a></li>
                        <li><a href="#section-6" className="text-blue-600 hover:underline">HOW LONG DO WE KEEP YOUR INFORMATION?</a></li>
                        <li><a href="#section-7" className="text-blue-600 hover:underline">HOW DO WE KEEP YOUR INFORMATION SAFE?</a></li>
                        <li><a href="#section-8" className="text-blue-600 hover:underline">DO WE COLLECT INFORMATION FROM MINORS?</a></li>
                        <li><a href="#section-9" className="text-blue-600 hover:underline">WHAT ARE YOUR PRIVACY RIGHTS?</a></li>
                        <li><a href="#section-10" className="text-blue-600 hover:underline">CONTROLS FOR DO-NOT-TRACK FEATURES</a></li>
                        <li><a href="#section-11" className="text-blue-600 hover:underline">DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</a></li>
                        <li><a href="#section-12" className="text-blue-600 hover:underline">DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?</a></li>
                        <li><a href="#section-13" className="text-blue-600 hover:underline">DO WE MAKE UPDATES TO THIS NOTICE?</a></li>
                        <li><a href="#section-14" className="text-blue-600 hover:underline">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a></li>
                        <li><a href="#section-15" className="text-blue-600 hover:underline">HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</a></li>
                    </ol>
                </div>

                {/* Section 1 */}
                <div id="section-1" className="space-y-4 pt-4">
                    <h2 className="text-xl font-bold uppercase">1. WHAT INFORMATION DO WE COLLECT?</h2>

                    <h3 id="personal-info" className="font-bold">Personal information you disclose to us</h3>
                    <p className="italic"><strong>In Short:</strong> We collect personal information that you provide to us.</p>
                    <p>We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>

                    <p><strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
                    <ul className="list-disc pl-8 space-y-1">
                        <li>names</li>
                        <li>phone numbers</li>
                        <li>email addresses</li>
                        <li>job titles</li>
                    </ul>

                    <p><strong>Sensitive Information.</strong> We do not process sensitive information.</p>
                    <p>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>

                    <h3 className="font-bold pt-4">Information automatically collected</h3>
                    <p className="italic"><strong>In Short:</strong> Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</p>
                    <p>We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</p>

                    <p>The information we collect includes:</p>
                    <ul className="list-disc pl-8 space-y-2">
                        <li><strong>Log and Usage Data.</strong> Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called "crash dumps"), and hardware settings).</li>
                        <li><strong>Device Data.</strong> We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.</li>
                        <li><strong>Location Data.</strong> We collect location data such as information about your device's location, which can be either precise or imprecise. How much information we collect depends on the type and settings of the device you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data that tells us your current location (based on your IP address). You can opt out of allowing us to collect this information either by refusing access to the information or by disabling your Location setting on your device. However, if you choose to opt out, you may not be able to use certain aspects of the Services.</li>
                    </ul>

                    <h3 className="font-bold pt-4">Google API</h3>
                    <p>Our use of information received from Google APIs will adhere to <a href="https://developers.google.com/terms/api-services-user-data-policy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google API Services User Data Policy</a>, including the <a href="https://developers.google.com/terms/api-services-user-data-policy#limited-use" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Limited Use requirements</a>.</p>
                </div>

                {/* Section 2 */}
                <div id="section-2" className="space-y-4 pt-4">
                    <h2 id="process-info" className="text-xl font-bold uppercase">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
                    <p className="italic"><strong>In Short:</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We process the personal information for the following purposes listed below. We may also process your information for other purposes only with your prior explicit consent.</p>

                    <p>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</p>
                    <ul className="list-disc pl-8 space-y-2">
                        <li><strong>To deliver and facilitate delivery of services to the user.</strong> We may process your information to provide you with the requested service.</li>
                        <li><strong>To respond to user inquiries/offer support to users.</strong> We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.</li>
                        <li><strong>To fulfill and manage your orders.</strong> We may process your information to fulfill and manage your orders, payments, returns, and exchanges made through the Services.</li>
                        <li><strong>To save or protect an individual's vital interest.</strong> We may process your information when necessary to save or protect an individual’s vital interest, such as to prevent harm.</li>
                    </ul>
                </div>

                {/* Section 3 */}
                <div id="section-3" className="space-y-4 pt-4">
                    <h2 className="text-xl font-bold uppercase">3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?</h2>
                    <p className="italic"><strong>In Short:</strong> We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.</p>

                    <p><u><strong>If you are located in the EU or UK, this section applies to you.</strong></u></p>
                    <p>The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely on in order to process your personal information. As such, we may rely on the following legal bases to process your personal information:</p>
                    <ul className="list-disc pl-8 space-y-2">
                        <li><strong>Consent.</strong> We may process your information if you have given us permission (i.e., consent) to use your personal information for a specific purpose. You can withdraw your consent at any time. Learn more about <a href="#withdrawing-consent" className="text-blue-600 hover:underline">withdrawing your consent</a>.</li>
                        <li><strong>Performance of a Contract.</strong> We may process your personal information when we believe it is necessary to fulfill our contractual obligations to you, including providing our Services or at your request prior to entering into a contract with you.</li>
                        <li><strong>Legal Obligations.</strong> We may process your information where we believe it is necessary for compliance with our legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend our legal rights, or disclose your information as evidence in litigation in which we are involved.</li>
                        <li><strong>Vital Interests.</strong> We may process your information where we believe it is necessary to protect your vital interests or the vital interests of a third party, such as situations involving potential threats to the safety of any person.</li>
                    </ul>

                    <p><u><strong>If you are located in Canada, this section applies to you.</strong></u></p>
                    <p>We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can withdraw your consent at any time.</p>
                    <p>In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:</p>
                    <ul className="list-disc pl-8 space-y-2">
                        <li>If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way</li>
                        <li>For investigations and fraud detection and prevention</li>
                        <li>For business transactions provided certain conditions are met</li>
                        <li>If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim</li>
                        <li>For identifying injured, ill, or deceased persons and communicating with next of kin</li>
                        <li>If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse</li>
                        <li>If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province</li>
                        <li>If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records</li>
                        <li>If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced</li>
                        <li>If the collection is solely for journalistic, artistic, or literary purposes</li>
                        <li>If the information is publicly available and is specified by the regulations</li>
                        <li>We may disclose de-identified information for approved research or statistics projects, subject to ethics oversight and confidentiality commitments</li>
                    </ul>
                </div>

                {/* Section 4 */}
                <div id="section-4" className="space-y-4 pt-4">
                    <h2 id="share-info" className="text-xl font-bold uppercase">4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
                    <p className="italic"><strong>In Short:</strong> We may share information in specific situations described in this section and/or with the following third parties.</p>
                    <p>We may need to share your personal information in the following situations:</p>
                    <ul className="list-disc pl-8 space-y-2">
                        <li><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                    </ul>
                </div>

                {/* Section 5 */}
                <div id="section-5" className="space-y-4 pt-4">
                    <h2 className="text-xl font-bold uppercase">5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
                    <p className="italic"><strong>In Short:</strong> We may use cookies and other tracking technologies to collect and store your information.</p>
                    <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.</p>
                    <p>We also permit third parties and service providers to use online tracking technologies on our Services for analytics and advertising, including to help manage and display advertisements, to tailor advertisements to your interests, or to send abandoned shopping cart reminders (depending on your communication preferences). The third parties and service providers use their technology to provide advertising about products and services tailored to your interests which may appear either on our Services or on other websites.</p>
                    <p>To the extent these online tracking technologies are deemed to be a "sale"/"sharing" (which includes targeted advertising, as defined under the applicable laws) under applicable US state laws, you can opt out of these online tracking technologies by submitting a request as described below under section "<a href="#section-11" className="text-blue-600 hover:underline">DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</a>"</p>
                    <p>Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.</p>

                    <h3 className="font-bold pt-2">Google Analytics</h3>
                    <p>We may share your information with Google Analytics to track and analyze the use of the Services. The Google Analytics Advertising Features that we may use include: Google Analytics Demographics and Interests Reporting. To opt out of being tracked by Google Analytics across the Services, visit <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout</a>. You can opt out of Google Analytics Advertising Features through <a href="https://adssettings.google.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Ads Settings</a> and Ad Settings for mobile apps. Other opt out means include <a href="http://optout.networkadvertising.org/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">http://optout.networkadvertising.org/</a> and <a href="http://www.networkadvertising.org/mobile-choice" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">http://www.networkadvertising.org/mobile-choice</a>. For more information on the privacy practices of Google, please visit the <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Privacy & Terms page</a>.</p>
                </div>

                {/* Section 6 */}
                <div id="section-6" className="space-y-4 pt-4">
                    <h2 className="text-xl font-bold uppercase">6. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
                    <p className="italic"><strong>In Short:</strong> We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.</p>
                    <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than until user discontinue our services.</p>
                    <p>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>
                </div>

                {/* Section 7 */}
                <div id="section-7" className="space-y-4 pt-4">
                    <h2 id="safe-info" className="text-xl font-bold uppercase">7. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
                    <p className="italic"><strong>In Short:</strong> We aim to protect your personal information through a system of organizational and technical security measures.</p>
                    <p>We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</p>
                </div>

                {/* Section 8 */}
                <div id="section-8" className="space-y-4 pt-4">
                    <h2 className="text-xl font-bold uppercase">8. DO WE COLLECT INFORMATION FROM MINORS?</h2>
                    <p className="italic"><strong>In Short:</strong> We do not knowingly collect data from or market to children under 18 years of age or the equivalent age as specified by law in your jurisdiction.</p>
                    <p>We do not knowingly collect, solicit data from, or market to children under 18 years of age or the equivalent age as specified by law in your jurisdiction, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or the equivalent age as specified by law in your jurisdiction or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age or the equivalent age as specified by law in your jurisdiction has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18 or the equivalent age as specified by law in your jurisdiction, please contact us at <a href="mailto:vikram@vooklu.com" className="text-blue-600 hover:underline">vikram@vooklu.com</a>.</p>
                </div>

                {/* Section 9 */}
                <div id="section-9" className="space-y-4 pt-4">
                    <h2 id="privacy-rights" className="text-xl font-bold uppercase">9. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
                    <p className="italic"><strong>In Short:</strong> Depending on your state of residence in the US or in some regions, such as the European Economic Area (EEA), United Kingdom (UK), Switzerland, and Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.</p>
                    <p>In some regions (like the EEA, UK, Switzerland, and Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making. If a decision that produces legal or similarly significant effects is made solely by automated means, we will inform you, explain the main factors, and offer a simple way to request human review. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section "<a href="#section-14" className="text-blue-600 hover:underline">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>" below.</p>
                    <p>We will consider and act upon any request in accordance with applicable data protection laws.</p>
                    <p>If you are located in the EEA or UK and you believe we are unlawfully processing your personal information, you also have the right to complain to your <a href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Member State data protection authority</a> or <a href="https://ico.org.uk/make-a-complaint/data-protection-complaints/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">UK data protection authority</a>.</p>
                    <p>If you are located in Switzerland, you may contact the <a href="https://www.edoeb.admin.ch/edoeb/en/home.html" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Federal Data Protection and Information Commissioner</a>.</p>

                    <h3 id="withdrawing-consent" className="font-bold pt-2">Withdrawing your consent:</h3>
                    <p>If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section "<a href="#section-14" className="text-blue-600 hover:underline">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>" below.</p>
                    <p>However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</p>
                    <p>If you have questions or comments about your privacy rights, you may email us at <a href="mailto:support@vooklu.com" className="text-blue-600 hover:underline">support@vooklu.com</a> or <a href="mailto:vikram@vooklu.com" className="text-blue-600 hover:underline">vikram@vooklu.com</a>.</p>
                </div>

                {/* Section 10 */}
                <div id="section-10" className="space-y-4 pt-4">
                    <h2 className="text-xl font-bold uppercase">10. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
                    <p>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.</p>
                    <p>California law requires us to let you know how we respond to web browser DNT signals. Because there currently is not an industry or legal standard for recognizing or honoring DNT signals, we do not respond to them at this time.</p>
                    <p><strong>Global Privacy Control:</strong> We recognize and honor Global Privacy Control (GPC) signals. If you use a browser or extension that supports GPC, we will treat this as a valid request to opt out of the sale or sharing of your personal information for targeted advertising purposes under applicable state privacy laws, including the California Consumer Privacy Act (CCPA). When we detect a GPC signal from your browser, we will automatically apply your opt-out preference without requiring you to take any additional action. For more information about GPC and how to enable it, visit <a href="https://globalprivacycontrol.org/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">globalprivacycontrol.org</a>.</p>
                </div>

                {/* Section 11 */}
                <div id="section-11" className="space-y-4 pt-4 overflow-x-auto">
                    <h2 className="text-xl font-bold uppercase">11. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h2>
                    <p className="italic"><strong>In Short:</strong> If you are a resident of California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia, you may have the right to request access to and receive details about the personal information we maintain about you and how we have processed it, correct inaccuracies, get a copy of, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. More information is provided below.</p>

                    <h3 className="font-bold pt-4">Categories of Personal Information We Collect</h3>
                    <p>The table below shows the categories of personal information we have collected in the past twelve (12) months. The table includes illustrative examples of each category and does not reflect the personal information we collect from you. For a comprehensive inventory of all personal information we process, please refer to the section "<a href="#section-1" className="text-blue-600 hover:underline">WHAT INFORMATION DO WE COLLECT?</a>"</p>

                    <table className="w-full text-left border-collapse border border-gray-300 mt-4 min-w-[600px]">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 px-4 py-2">Category</th>
                                <th className="border border-gray-300 px-4 py-2">Examples</th>
                                <th className="border border-gray-300 px-4 py-2 text-center">Collected</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">A. Identifiers</td>
                                <td className="border border-gray-300 px-4 py-2">Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">NO</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">B. Personal information as defined in the California Customer Records statute</td>
                                <td className="border border-gray-300 px-4 py-2">Name, contact information, education, employment, employment history, and financial information</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">NO</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">C. Protected classification characteristics under state or federal law</td>
                                <td className="border border-gray-300 px-4 py-2">Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">NO</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">D. Commercial information</td>
                                <td className="border border-gray-300 px-4 py-2">Transaction information, purchase history, financial details, and payment information</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">NO</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">E. Biometric information</td>
                                <td className="border border-gray-300 px-4 py-2">Fingerprints and voiceprints</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">NO</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">F. Internet or other similar network activity</td>
                                <td className="border border-gray-300 px-4 py-2">Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">NO</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">G. Geolocation data</td>
                                <td className="border border-gray-300 px-4 py-2">Device location</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">NO</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">H. Audio, electronic, sensory, or similar information</td>
                                <td className="border border-gray-300 px-4 py-2">Images and audio, video or call recordings created in connection with our business activities</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">NO</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">I. Professional or employment-related information</td>
                                <td className="border border-gray-300 px-4 py-2">Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">NO</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">J. Education Information</td>
                                <td className="border border-gray-300 px-4 py-2">Student records and directory information</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">NO</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">K. Inferences drawn from collected personal information</td>
                                <td className="border border-gray-300 px-4 py-2">Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">YES</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 px-4 py-2">L. Sensitive personal Information</td>
                                <td className="border border-gray-300 px-4 py-2"></td>
                                <td className="border border-gray-300 px-4 py-2 text-center">NO</td>
                            </tr>
                        </tbody>
                    </table>

                    <p className="mt-4">We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:</p>
                    <ul className="list-disc pl-8 space-y-2">
                        <li>Receiving help through our customer support channels;</li>
                        <li>Participation in customer surveys or contests; and</li>
                        <li>Facilitation in the delivery of our Services and to respond to your inquiries.</li>
                    </ul>

                    <p>We will use and retain the collected personal information as needed to provide the Services or for:</p>
                    <ul className="list-disc pl-8 space-y-2">
                        <li>Category K - as long as user connect with us</li>
                    </ul>

                    <h3 className="font-bold pt-4">Sources of Personal Information</h3>
                    <p>Learn more about the sources of personal information we collect in "<a href="#section-1" className="text-blue-600 hover:underline">WHAT INFORMATION DO WE COLLECT?</a>"</p>

                    <h3 className="font-bold pt-4">How We Use and Share Personal Information</h3>
                    <p>Learn more about how we use your personal information in the section, "<a href="#section-2" className="text-blue-600 hover:underline">HOW DO WE PROCESS YOUR INFORMATION?</a>"</p>

                    <p><strong>Will your information be shared with anyone else?</strong></p>
                    <p>We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Learn more about how we disclose personal information to in the section, "<a href="#section-4" className="text-blue-600 hover:underline">WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a>"</p>
                    <p>We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal information.</p>
                    <p>We have not disclosed, sold, or shared any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. We will not sell or share personal information in the future belonging to website visitors, users, and other consumers.</p>

                    <h3 className="font-bold pt-4">Your Rights</h3>
                    <p>You have rights under certain US state data protection laws. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law. These rights include:</p>
                    <ul className="list-disc pl-8 space-y-2">
                        <li>Right to know whether or not we are processing your personal data</li>
                        <li>Right to access your personal data</li>
                        <li>Right to correct inaccuracies in your personal data</li>
                        <li>Right to request the deletion of your personal data</li>
                        <li>Right to obtain a copy of the personal data you previously shared with us</li>
                        <li>Right to non-discrimination for exercising your rights</li>
                        <li>Right to opt out of the processing of your personal data if it is used for targeted advertising (or sharing as defined under California’s privacy law), the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects ("profiling")</li>
                    </ul>

                    <p>Depending upon the state where you live, you may also have the following rights:</p>
                    <ul className="list-disc pl-8 space-y-2">
                        <li>Right to access the categories of personal data being processed (as permitted by applicable law, including the privacy law in Minnesota)</li>
                        <li>Right to obtain a list of the categories of third parties to which we have disclosed personal data (as permitted by applicable law, including the privacy law in California, Delaware, and Maryland)</li>
                        <li>Right to obtain a list of specific third parties to which we have disclosed personal data (as permitted by applicable law, including the privacy law in Minnesota and Oregon)</li>
                        <li>Right to obtain a list of third parties to which we have sold personal data (as permitted by applicable law, including the privacy law in Connecticut)</li>
                        <li>Right to review, understand, question, and depending on where you live, correct how personal data has been profiled (as permitted by applicable law, including the privacy law in Connecticut and Minnesota)</li>
                        <li>Right to limit use and disclosure of sensitive personal data (as permitted by applicable law, including the privacy law in California)</li>
                        <li>Right to opt out of the collection of sensitive data and personal data collected through the operation of a voice or facial recognition feature (as permitted by applicable law, including the privacy law in Florida)</li>
                    </ul>

                    <h3 className="font-bold pt-4">How to Exercise Your Rights</h3>
                    <p>To exercise these rights, you can contact us by submitting a <a href="https://app.termly.io/dsar/77e6945e-7302-464d-9f" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">data subject access request</a>, by emailing us at <a href="mailto:support@vooklu.com" className="text-blue-600 hover:underline">support@vooklu.com</a>, by visiting <a href="http://www.vooklu.com/contact" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">http://www.vooklu.com/contact</a>, or by referring to the contact details at the bottom of this document.</p>
                    <p>We will honor your opt-out preferences if you enact the Global Privacy Control (GPC) opt-out signal on your browser.</p>
                    <p>Under certain US state data protection laws, you can designate an authorized agent to make a request on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with applicable laws.</p>

                    <h3 className="font-bold pt-4">Request Verification</h3>
                    <p>Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. We will only use personal information provided in your request to verify your identity or authority to make the request. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes.</p>
                    <p>If you submit the request through an authorized agent, we may need to collect additional information to verify your identity before processing your request and the agent will need to provide a written and signed permission from you to submit such request on your behalf.</p>

                    <h3 className="font-bold pt-4">Appeals</h3>
                    <p>Under certain US state data protection laws, if we decline to take action regarding your request, you may appeal our decision by emailing us at __________. We will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions. If your appeal is denied, you may submit a complaint to your state attorney general.</p>
                </div>

                {/* Section 12 */}
                <div id="section-12" className="space-y-4 pt-4">
                    <h2 className="text-xl font-bold uppercase">12. DO OTHER REGIONS HAVE SPECIFIC PRIVACY RIGHTS?</h2>
                    <p className="italic"><strong>In Short:</strong> You may have additional rights based on the country you reside in.</p>

                    <h3 className="font-bold pt-4">Australia and New Zealand</h3>
                    <p>We collect and process your personal information under the obligations and conditions set by Australia's Privacy Act 1988 and New Zealand's Privacy Act 2020 (Privacy Act).</p>
                    <p>This Privacy Notice satisfies the notice requirements defined in both Privacy Acts, in particular: what personal information we collect from you, from which sources, for which purposes, and other recipients of your personal information.</p>
                    <p>If you do not wish to provide the personal information necessary to fulfill their applicable purpose, it may affect our ability to provide our services, in particular:</p>
                    <ul className="list-disc pl-8 space-y-1">
                        <li>offer you the products or services that you want</li>
                        <li>respond to or help with your requests</li>
                    </ul>
                    <p>At any time, you have the right to request access to or correction of your personal information. You can make such a request by contacting us by using the contact details provided in the section "<a href="#section-15" className="text-blue-600 hover:underline">HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</a>"</p>
                    <p>If you believe we are unlawfully processing your personal information, you have the right to submit a complaint about a breach of the Australian Privacy Principles to the <a href="https://www.oaic.gov.au/privacy/privacy-complaints" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Office of the Australian Information Commissioner</a> and a breach of New Zealand's Privacy Principles to the <a href="https://www.privacy.org.nz/your-rights/making-a-complaint/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Office of New Zealand Privacy Commissioner</a>.</p>
                </div>

                {/* Section 13 */}
                <div id="section-13" className="space-y-4 pt-4">
                    <h2 className="text-xl font-bold uppercase">13. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
                    <p className="italic"><strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>
                    <p>We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Revised" date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.</p>
                </div>

                {/* Section 14 */}
                <div id="section-14" className="space-y-4 pt-4">
                    <h2 className="text-xl font-bold uppercase">14. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
                    <p>If you have questions or comments about this notice, you may contact our Data Protection Officer (DPO) by email at <a href="mailto:vikram@vooklu.com" className="text-blue-600 hover:underline">vikram@vooklu.com</a>, or contact us by post at:</p>
                    <address className="not-italic bg-gray-50 border border-gray-200 rounded p-4 pl-6 font-mono text-xs md:text-sm space-y-1 shadow-sm w-fit min-w-[250px]">
                        <p className="font-bold text-gray-700">vooklu</p>
                        <p>Data Protection Officer</p>
                        <p>rz128b</p>
                        <p>Vijay Enclave</p>
                        <p>New Delhi, Delhi 110045</p>
                        <p>India</p>
                    </address>
                </div>

                {/* Section 15 */}
                <div id="section-15" className="space-y-4 pt-4">
                    <h2 className="text-xl font-bold uppercase">15. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>
                    <p>You have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please fill out and submit a <a href="https://app.termly.io/dsar/77e6945e-7302-464d-9f" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">data subject access request</a>.</p>
                </div>

            </div>
        </div>
    );
}