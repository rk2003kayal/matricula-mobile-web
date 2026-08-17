import React from 'react';
import { ArrowLeft, Home } from 'lucide-react';
import Footer from './Footer';
import './TermsPage.css';

export default function TermsPage({ onBack, onGoHome }) {
  return (
    <div className="terms-page-view animate-fadeIn">
      {/* Top Header with Centered Logo, Back Arrow & Circular Home Button */}
      <header className="terms-header sticky-top">
        <div className="terms-header-container">
          <div className="header-left-actions">
            <button className="back-arrow-icon-btn" onClick={onBack} aria-label="Back">
              <ArrowLeft size={20} color="#17375E" />
            </button>
            <button className="home-circle-btn" onClick={onGoHome} aria-label="Go to Home" title="Home">
              <Home size={18} color="#17375E" />
            </button>
          </div>
          
          <img 
            src="/matricula-logo.png" 
            alt="Matricula Logo" 
            className="terms-header-logo" 
            onClick={onGoHome}
            style={{ cursor: 'pointer' }}
          />

          <div className="header-spacer-right"></div>
        </div>
      </header>

      {/* Compact Hero Banner */}
      <section className="section-wrapper bg-navy terms-hero-section">
        <div className="section-header-block text-center">
          <h1 className="terms-page-title text-white">
            Terms & Conditions
          </h1>

          <p className="section-subtitle text-slate mt-8">
            Please read these terms and conditions carefully before using Matricula Education services.
          </p>
        </div>
      </section>

      {/* Main Document Content Wrapper */}
      <main className="section-wrapper bg-light terms-content-section">
        <div className="terms-card-container card-base">
          <div className="terms-body-text">
            
            {/* Terms Of Use */}
            <section className="terms-block">
              <h2>Terms Of Use</h2>
              <p>
                These Terms & Conditions (“Terms”) of Use of our application <strong>Matricula – THE LEARNING APP</strong> (“Application”) or any products or services in connection with the Application/Website/Products (“Services”) or Any modes of registrations or usage of products, including through SD cards, tablets, or other storage/transmitting device are between <strong>Roasted Sage Private Limited</strong> (“Company/We/Us/Our”) and its users (“User/You/Your”).
              </p>
              <p>
                These Terms constitute an electronic record in accordance with the provisions of the Information Technology Act, 2000 and the Information Technology (Intermediaries guidelines) Rules, 2011 thereunder, as amended from time to time. Please read the Terms and the privacy policy of the Company (“Privacy Policy”) with respect to registration and usage of the Application, Website, Services, and products carefully before using the Application, Website, Services, or products.
              </p>
              <p>
                In the event of any discrepancy between the Terms and any other policies with respect to the Application or Website or Services or products, the provisions of the Terms shall prevail. Your use/access/browsing of the Application or Website or the Services or products or registration (with or without payment/with or without a subscription) through any means shall signify Your acceptance of the Terms and Your agreement to be legally bound by the same.
              </p>
              <p>
                If you do not agree with the Terms or the Privacy Policy, please do not use the Application or Website or avail the Services or products. Any access to our Services/Applications/products through registrations/subscriptions is non-transferable.
              </p>
            </section>

            {/* Intellectual Property */}
            <section className="terms-block">
              <h2>Intellectual Property</h2>
              <p>
                Except as mentioned below, all information, content, material, trademarks, service marks, trade names, and trade secrets, including but not limited to the software, text, images, graphics, video, script, and audio, contained in the Application, Website, Services, and products are proprietary property of the Company (“Proprietary Information”).
              </p>
              <p>
                No Proprietary Information may be copied, downloaded, reproduced, modified, republished, uploaded, posted, transmitted or distributed in any way without obtaining prior written permission from the Company.
              </p>
              <p>
                Nothing on this Application or Website or Services/products shall be deemed to confer a license of or any other right, interest, or title to or in any of the intellectual property rights belonging to the Company, to the User.
              </p>
            </section>

            {/* Third-Party Content */}
            <section className="terms-block">
              <h2>Third-Party Content</h2>
              <p>
                You may own the medium on which the information, content, or materials reside, but the Company shall at all times retain complete title to the information, content, or materials and all intellectual property rights inserted by the Company on such medium.
              </p>
              <p>
                Certain contents on the Website may belong to third parties. Such contents have been reproduced after obtaining prior consent from said party, and all rights relating to such content will remain with such third party.
              </p>
              <p>
                Further, you recognize and acknowledge that the ownership of all trademarks, copyright, logos, service marks, and other intellectual property owned by any third party shall continue to vest with such a party and You are not permitted to use the same without the consent of the respective third party.
              </p>
            </section>

            {/* Personal & Non-Commercial Use */}
            <section className="terms-block">
              <h2>Personal & Non-Commercial Use</h2>
              <p>
                Your use of our products, Website, Application, and Services is solely for your personal and non-commercial use. Any use of the Application, Website, Services, or products or their contents other than for personal purposes is prohibited.
              </p>
              <p>
                Your personal and non-commercial use of this Application, Website, products, and/or our Services shall be subjected to the following restrictions:
              </p>
              <ul className="terms-list">
                <li>You may not decompile, reverse engineer, or disassemble the contents of the Application and/or our Website and/or Services/products or modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information or software obtained from the Application and/or our Website and/or Services/products.</li>
                <li>You may not remove any copyright, trademark registration, or other proprietary notices from the contents.</li>
                <li>You will not use the Application and/or Website and/or any products or Services for commercial purposes of any kind.</li>
                <li>You will not advertise or sell the Application or any products, Services, domain names or otherwise, whether or not for profit.</li>
                <li>You will not solicit others, including solicitations for contributions or donations, or use any public forum for commercial purposes of any kind.</li>
                <li>You will not use the Application and/or Website/products and Services in any way that is unlawful or harms the Company or any other person or entity as determined by the Company.</li>
              </ul>
            </section>

            {/* Prohibited Activities */}
            <section className="terms-block">
              <h2>Prohibited Activities</h2>
              <p>No User shall be permitted to perform any of the following prohibited activities while availing of our Services:</p>
              <ul className="terms-list">
                <li>Making available any content that is misleading, unlawful, harmful, threatening, abusive, defamatory, libellous, vulgar, obscene, child-pornographic, lewd, lascivious, profane, invasive of another's privacy, hateful, or racially, ethnically, or otherwise objectionable.</li>
                <li>Stalking, intimidating and/or harassing another and/or inciting another to commit violence.</li>
                <li>Transmitting material that encourages anyone to commit a criminal offence, results in civil liability, or breaches relevant laws, regulations or codes of practice.</li>
                <li>Interfering with any other person's use or enjoyment of the Application/Website/Services.</li>
                <li>Making, transmitting or storing electronic copies of materials protected by copyright without permission of the owner.</li>
                <li>Committing any act that amounts to infringement of intellectual property or making available material that infringes intellectual property rights or proprietary rights.</li>
                <li>Making available content or material that You do not have a right to make available under any law or contractual or fiduciary relationship unless You own or control the rights or have received all necessary consents.</li>
                <li>Impersonating any person or entity, or falsely stating or misrepresenting Your affiliation with a person or entity.</li>
                <li>Posting, transmitting or making available material containing viruses, Trojan horses, worms, spyware, time bombs, cancelbots or other programming routines that may harm the Application/services, interests or rights of users.</li>
                <li>Harvesting or collecting data or personal information about other Users without their consent.</li>
                <li>Accessing or using the Application/Website/Services/products in a manner that could damage, disable, overburden or impair the Application's servers or connected networks.</li>
                <li>Intentionally or unintentionally interfering with or disrupting services or violating applicable laws, requirements, procedures, policies or regulations.</li>
                <li>Disrupting or interfering with security or causing harm to Application/Website/Services/products, materials, systems or resources.</li>
                <li>Gaining unauthorized access to user accounts, passwords, servers or networks connected to or accessible through the Application/Website/Services/products or affiliated or linked sites.</li>
              </ul>
            </section>

            {/* Disclaimer */}
            <section className="terms-block">
              <h2>Disclaimer</h2>
              <p>
                This website, the application and the services are provided on an “as is” basis with all faults and without any warranty of any kind.
              </p>
              <p>
                The Company hereby disclaims all warranties and conditions with regard to the website, application/products and services, including without limitation, all implied warranties and conditions of merchantability, fitness for a particular purpose, title, accuracy, timeliness, performance, completeness, suitability and non-infringement.
              </p>
              <p>
                Additionally, the Company shall not be liable for any damages arising out of or in connection with the use or performance of this site, application or services.
              </p>
              <p>
                Your use of any information or materials on this website/application/services/products is entirely at your own risk, for which we shall not be liable. It shall be your own responsibility to ensure that services provided by us meet your specific requirements.
              </p>
            </section>

            {/* General Provisions */}
            <section className="terms-block">
              <h2>General Provisions</h2>
              
              <h3>Notice</h3>
              <p>All notices served by the Company shall be provided via email to Your account or as a general notification on the Application.</p>
              <p>Any notice to be provided to the Company should be sent to: <strong className="text-navy">ROASTED SAGE PRIVATE LIMITED, 105, Upohar Town Centre, New Garia, Kolkata – 700094.</strong></p>

              <h3>Entire Agreement</h3>
              <p>The Terms, along with the Privacy Policy and any other guidelines made applicable to the Application from time to time, constitute the entire agreement between the Company and You with respect to Your access to or use of the Application, Website, and Services thereof.</p>

              <h3>Assignment</h3>
              <p>You cannot assign or otherwise transfer your obligations under the Terms, or any right granted hereunder to any third party. The Company's rights under the Terms are freely transferable by the Company to any third parties without the requirement of seeking Your consent.</p>

              <h3>Severability</h3>
              <p>If, for any reason, a court of competent jurisdiction finds any provision of the Terms, or portion thereof, to be unenforceable, that provision shall be enforced to the maximum extent permissible so as to give effect to the intent of the parties as reflected by that provision, and the remainder of the Terms shall continue in full force and effect.</p>

              <h3>Waiver</h3>
              <p>Any failure by the Company to enforce or exercise any provision of the Terms, or any related right, shall not constitute a waiver by the Company of that provision or right.</p>

              <h3>Relationship</h3>
              <p>You acknowledge that Your participation in the Application does not make You an employee, agency, partnership, joint venture, or franchise of the Company.</p>
            </section>

            {/* Conclusion & Feedback */}
            <section className="terms-block">
              <h2>Conclusion & Feedback</h2>
              <p>
                The Company provides these Terms so that You are aware of the terms that apply to your use of the Website/Application and Services. You acknowledge that the Company has given You a reasonable opportunity to review these Terms and that You have agreed to them.
              </p>

              <h3>Feedback</h3>
              <p>Any feedback You provide with respect to the Application shall be deemed to be non-confidential. The Application shall be free to use such information on an unrestricted basis. By submitting the feedback, You represent and warrant that:</p>
              <ul className="terms-list">
                <li>Your feedback does not contain confidential or proprietary information of You or of third parties.</li>
                <li>The Company is not under any obligation of confidentiality, express or implied, with respect to the feedback.</li>
                <li>The Application may have something similar to the feedback already under consideration or in development.</li>
                <li>You are not entitled to any compensation or reimbursement of any kind from the Company for the feedback under any circumstances unless specified.</li>
              </ul>
              <p>Under no circumstances shall the Company be held responsible in any manner for any content provided by other users, even if such content is offensive or hurtful. Please exercise caution while accessing the Application.</p>
            </section>

            {/* Cancellation Property */}
            <section className="terms-block highlight-policy-block">
              <h2>Cancellation Property</h2>
              <p>Cancellation is subject to use of the Matricula Platform if it disrupts or affects customer in any way.</p>
              <p>We can cancel your subscription if a request is made within <strong>72 hours or 3 days</strong> of placing the order.</p>
              <p>
                The request has to be made at <a href="mailto:hey@matricula.co.in" className="policy-link">hey@matricula.co.in</a> with your email ID and Phone number used during registration or by calling us on <a href="tel:+917439709486" className="policy-link">+91 7439709486</a>.
              </p>
              <p>Cancellation request will be deemed valid only if it is made through an email to <a href="mailto:hey@matricula.co.in" className="policy-link">hey@matricula.co.in</a> or by calling us on <a href="tel:+917439709486" className="policy-link">+91 7439709486</a> within 3 days from subscription.</p>
            </section>

            {/* Refund Policy */}
            <section className="terms-block highlight-policy-block">
              <h2>Refund Policy</h2>
              <p>
                A refund request will be deemed valid only if it is made through an email to <a href="mailto:hey@matricula.co.in" className="policy-link">hey@matricula.co.in</a> or by calling us on <a href="tel:+917439709486" className="policy-link">+91 7439709486</a> within <strong>3 days</strong> of placing the order.
              </p>
              <p>Refunds shall be made to bank account within <strong>10 to 15 working days</strong> of receipt of cancellation request.</p>
            </section>

          </div>
        </div>
      </main>

      {/* Global CTA Footer */}
      <Footer />
    </div>
  );
}
