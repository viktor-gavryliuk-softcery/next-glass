import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use — ADS CONTROL',
  description: 'Terms governing the use of the adscontrol.io website and the materials published on it.',
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

const content = `<h1>Terms of Use</h1>
<p class="updated">Last updated: 01.10.2026</p>

<p>
These Terms govern your use of the website <a href="https://adscontrol.io">adscontrol.io</a>
and the materials published on it, operated by
BARSHCHUK SERHII RUSLANOVYCH (&ldquo;ADS CONTROL&rdquo;, &ldquo;we&rdquo;).
By using this website you accept these Terms. If you do not accept them, please do not
use the website.
</p>

<h2>1. What this website is</h2>
<p>
This website presents our advertising services and lets you contact us. It is
informational. It is not a platform, not a software product offered to the public, and
it does not provide accounts or logins to visitors.
</p>

<h2>2. Our services</h2>
<p>
We provide advertising services to clients under separate written agreements. Those
agreements, not these Terms, govern the scope of work, fees, confidentiality and
liability for any engagement. Where these Terms conflict with a signed client agreement,
the client agreement prevails.
</p>

<h2>3. Our internal tools</h2>
<p>
We operate internal software to manage our clients' advertising accounts, including
integrations with advertising platforms such as Google Ads and Meta Ads. These tools are
used by our own staff only. They are not offered, sold, licensed or made available to
third parties, and no visitor to this website obtains access to them.
</p>
<p>
We access a client's advertising account only after that client grants access within
their own platform account, and only to the extent that access allows. The client may
revoke it at any time.
</p>

<h2>4. Acceptable use</h2>
<p>You agree not to:</p>
<ul>
  <li>use this website for any unlawful purpose;</li>
  <li>attempt to gain unauthorised access to any part of the website or our systems;</li>
  <li>interfere with the operation of the website, including by automated scraping that
      places an unreasonable load on it;</li>
  <li>copy, reproduce or republish our content beyond what is permitted below.</li>
</ul>

<h2>5. Intellectual property</h2>
<p>
The content of this website — text, graphics, logos and layout — belongs to us or our
licensors and is protected by applicable law. You may view and print pages for your own
reference. Any other use requires our prior written permission.
</p>
<p>
Third-party names and marks referred to on this website, including Google and Meta,
belong to their respective owners. Their use here is descriptive only and does not imply
endorsement, sponsorship or affiliation.
</p>

<h2>6. No warranty on content</h2>
<p>
The website is provided &ldquo;as is&rdquo;. Information on it, including any statements
about results, is general and does not constitute advice or a guarantee. Advertising
results depend on factors outside our control, including platform policies, auction
dynamics and market conditions.
</p>

<h2>7. Limitation of liability</h2>
<p>
To the extent permitted by law, we are not liable for indirect or consequential loss, or
for loss of profit, revenue or data, arising from use of this website. Nothing in these
Terms limits liability that cannot be limited by law, including liability for fraud or
for death or personal injury caused by negligence.
</p>

<h2>8. Third-party links</h2>
<p>
This website may link to third-party sites. We do not control them and are not
responsible for their content or practices.
</p>

<h2>9. Privacy</h2>
<p>
Our handling of personal data is described in our
<a href="/privacy">Privacy Policy</a>, which forms part of these Terms.
</p>

<h2>10. Changes</h2>
<p>
We may update these Terms. The date at the top shows when they last changed. Continued
use of the website after a change means you accept the updated Terms.
</p>

<h2>11. Governing law</h2>
<p>
These Terms are governed by the laws of UKRAINE , and the
courts of UKRAINE have exclusive jurisdiction, without
prejudice to any mandatory consumer protections available to you locally.
</p>

<h2>12. Contact</h2>
<p>
BARSHCHUK SERHII RUSLANOVYCH <br>
Ukraine, Kyiv, Metalistiv 3, 00350 <br>
serhii_ceo@adscontrol.io
</p>

<footer>
  <a href="/">ADS CONTROL</a> &middot; <a href="/privacy">Privacy Policy</a>
</footer>`;

export default function TermsOfUse() {
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
