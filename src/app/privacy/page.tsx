import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — ADS CONTROL',
  description: 'How ADS CONTROL collects, uses and stores information, including data obtained from Google APIs.',
};

const css = `.legal { background:#101010; color:#e6e6e6; min-height:100vh;
         padding:112px 16px 80px; font-size:16px; line-height:1.65; }
.legal .wrap { max-width:760px; margin:0 auto; }
.legal h1 { font-size:30px; margin:0 0 6px; color:#fff; }
.legal h2 { font-size:20px; margin:36px 0 10px; padding-bottom:6px; color:#fff;
            border-bottom:1px solid #2a2a2a; }
.legal h3 { font-size:16px; margin:22px 0 6px; color:#fff; }
.legal p { margin:12px 0; }
.legal .updated { color:#9a9a9a; margin:0 0 28px; font-size:14px; }
.legal ul { padding-left:20px; margin:10px 0; }
.legal li { margin:6px 0; }
.legal a { color:#bdff00; text-decoration:underline; }
.legal .box { border:1px solid #2a2a2a; border-left:3px solid #bdff00;
              padding:14px 18px; margin:20px 0; border-radius:4px;
              background:#161616; }
.legal .fill { background:#3a3a12; color:#e9ff8a; padding:1px 6px;
               border-radius:3px; font-weight:600; }
.legal footer { margin-top:48px; padding-top:18px; border-top:1px solid #2a2a2a;
                color:#9a9a9a; font-size:14px; }
@media (max-width:600px) { .legal { padding-top:88px; } }`;

const content = `<h1>Privacy Policy</h1>
<p class="updated">Last updated: <span class="fill">[DATE]</span></p>

<p>
This Privacy Policy explains how <span class="fill">Barshchuk Serhii Ruslanovych</span>
(&ldquo;ADS CONTROL&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), operating the website
<a href="https://adscontrol.io">adscontrol.io</a>, collects, uses, stores and shares
information. It also describes how our internal advertising management tool handles
data obtained from Google APIs.
</p>

<h2>1. Who we are</h2>
<p>
We are an advertising agency. We plan, launch and optimise paid advertising campaigns
for our clients in their own advertising accounts.
</p>
<ul>
  <li>Legal entity: <span class="fill">Barshchuk Serhii Ruslanovych, 2010350000000853769</span></li>
  <li>Registered address: <span class="fill">Ukraine, Kyiv, Metalistiv 3, 00350</span></li>
  <li>Contact for privacy questions: <span class="fill">privacy@adscontrol.io</span></li>
</ul>
<p>
For personal data processed on behalf of a client, the client is the data controller
and we act as a processor under a written agreement. For data about visitors to this
website and about our own prospective clients, we are the controller.
</p>

<h2>2. Information we collect</h2>

<h3>2.1 Information you give us</h3>
<ul>
  <li>Contact details you submit through forms or send by email — name, company,
      email address, phone number.</li>
  <li>Information you share with us in the course of a project — briefs, creative
      materials, access to advertising accounts.</li>
</ul>

<h3>2.2 Information collected automatically on this website</h3>
<ul>
  <li>Standard server logs: IP address, browser type, pages requested, timestamps.</li>
  <li>Cookies and similar technologies, where you have consented to them.</li>
</ul>

<h3>2.3 Advertising account data</h3>
<p>
When a client grants us access to their advertising account, we access performance data
of that account in order to manage it. This includes campaign, ad group, keyword, search
term, ad and conversion statistics.
</p>

<h2>3. Data obtained from Google APIs</h2>

<div class="box">
<p style="margin:0">
<strong>Limited Use disclosure.</strong> Our use of information received from Google APIs
adheres to the
<a href="https://developers.google.com/terms/api-services-user-data-policy">Google API
Services User Data Policy</a>, including its Limited Use requirements.
</p>
</div>

<p>
We operate an internal tool that connects to the Google Ads API in order to manage the
advertising accounts of our clients. The following describes exactly how that tool
handles data received from Google.
</p>

<h3>3.1 How access is granted</h3>
<p>
Access is granted by the client, inside their own Google Ads account, by adding our
service account as a user with the access level the client chooses. We do not ask
individuals to sign in through an OAuth consent screen, and we do not collect or store
any Google account credentials. A client may revoke our access at any time from their
Google Ads account, which immediately ends our ability to read or change anything in it.
</p>

<h3>3.2 What data we access</h3>
<ul>
  <li>Account information: account name, currency, time zone, status.</li>
  <li>Campaign, ad group and keyword performance: impressions, clicks, cost,
      conversions, conversion value.</li>
  <li>Search terms that triggered ads.</li>
  <li>Existing ad text and final URLs.</li>
  <li>Conversion action configuration and status.</li>
</ul>
<p>
We do not access, and have no need for, the personal data of individuals who saw or
clicked on an advertisement. The data we read is aggregated advertising performance
data belonging to the advertiser.
</p>

<h3>3.3 How we use it</h3>
<ul>
  <li>To report performance to the client whose account the data came from.</li>
  <li>To identify wasted spend and propose improvements to that same account.</li>
  <li>To build and adjust campaigns in that same account, subject to human approval.</li>
</ul>

<h3>3.4 How we store it</h3>
<p>
Data retrieved from Google APIs is stored on equipment under our control, for the
purpose of producing reports and measuring whether a change improved the result. It is
retained only as long as we manage the account in question, and is deleted on request or
when the engagement ends.
</p>

<h3>3.5 What we never do</h3>
<ul>
  <li>We do not sell, rent or licence Google API data to anyone.</li>
  <li>We do not transfer it to third parties, except where required by law.</li>
  <li>We do not use it to serve advertising, to build advertising profiles, or for any
      purpose unrelated to managing the account it came from.</li>
  <li>We do not combine one client's Google API data with another client's data.</li>
  <li>We do not use it to train generalised artificial intelligence or machine learning
      models.</li>
</ul>

<h3>3.6 Automated processing and human oversight</h3>
<p>
Our tool uses automated analysis to draft suggestions — for example, proposing a negative
keyword after observing spend without conversions. No change is applied to a live
advertising account automatically. Every change is reviewed and explicitly approved by a
member of our staff before it is submitted to Google.
</p>

<h2>4. Legal bases for processing</h2>
<ul>
  <li><strong>Contract</strong> — to provide the services a client has engaged us for.</li>
  <li><strong>Legitimate interests</strong> — to operate and secure our website, and to
      respond to enquiries.</li>
  <li><strong>Consent</strong> — for non-essential cookies and for marketing
      communications, where applicable.</li>
  <li><strong>Legal obligation</strong> — for accounting and tax records.</li>
</ul>

<h2>5. Sharing</h2>
<p>We share information only with:</p>
<ul>
  <li>service providers who host our systems or provide infrastructure, bound by
      confidentiality and data processing terms;</li>
  <li>advertising platforms, to the extent necessary to run the client's campaigns;</li>
  <li>authorities, where we are legally required to do so.</li>
</ul>
<p>We do not sell personal data.</p>

<h2>6. International transfers</h2>
<p>
Where data is transferred outside the <span class="fill">UKRAINE</span>, we
rely on an appropriate transfer mechanism, such as the European Commission's Standard
Contractual Clauses.
</p>

<h2>7. Retention</h2>
<p>
We keep personal data only as long as necessary for the purpose it was collected for, or
as required by law. Advertising account data is deleted when the engagement ends or
earlier on request.
</p>

<h2>8. Your rights</h2>
<p>
Subject to applicable law, you may request access to your personal data, correction,
deletion, restriction or portability, and you may object to processing based on
legitimate interests. Where processing is based on consent, you may withdraw it at any
time. Write to <span class="fill">privacy@adscontrol.io</span>.
</p>
<p>
You also have the right to complain to your local data protection authority.
</p>

<h2>9. Security</h2>
<p>
We apply technical and organisational measures appropriate to the risk, including access
restricted to named staff, credentials kept outside source code, and separation of
client data.
</p>

<h2>10. Children</h2>
<p>Our services are not directed to children and we do not knowingly collect their data.</p>

<h2>11. Changes</h2>
<p>
We may update this policy. The date at the top shows when it last changed. Material
changes will be communicated to affected clients.
</p>

<h2>12. Contact</h2>
<p>
<span class="fill">Barshchuk Serhii Ruslanovych</span><br>
<span class="fill">Ukraine, Kyiv, Metalistiv 3, 00350</span><br>
<span class="fill">privacy@adscontrol.io</span>
</p>

<footer>
  <a href="/">ADS CONTROL</a> &middot; <a href="/terms">Terms of Use</a>
</footer>`;

export default function PrivacyPolicy() {
  return (
    <main className='legal'>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div
        className='wrap'
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </main>
  );
}
