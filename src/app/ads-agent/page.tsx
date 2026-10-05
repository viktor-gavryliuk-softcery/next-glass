import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Profitad Ads Agent — ADS CONTROL',
  description: 'Internal campaign management tool operated by ADS CONTROL: what it does, how it connects to Google Ads, and how account data is handled.',
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

const content = `<h1>Profitad Ads Agent</h1>
<p class="updated">Internal campaign management tool operated by ADS CONTROL</p>

<p>
Profitad Ads Agent is the internal software our agency uses to manage the Google Ads
accounts of our own clients. It is operated by our staff only. It is not sold, licensed
or offered as a service to third parties, and there is no public sign-up.
</p>

<h2>What the tool does</h2>
<ul>
  <li><strong>Reporting.</strong> It collects campaign, ad group, keyword and search term
      performance from a client's Google Ads account and summarises it for the account
      manager.</li>
  <li><strong>Analysis.</strong> It identifies wasted spend &mdash; search terms with clicks
      and no conversions, keywords below first page bid, conversion tracking that is
      misconfigured or not reporting.</li>
  <li><strong>Campaign construction.</strong> It assembles new Search campaigns from a
      written brief: campaign, budget, ad groups, keywords and responsive search ads.</li>
</ul>

<h2>How it connects to Google Ads</h2>
<p>
Access is granted by the client, inside their own Google Ads account, by adding our
service account as a user with the access level the client chooses. We do not ask
individuals to sign in through an OAuth consent screen and we store no Google account
credentials. The client may revoke access at any time, which immediately ends our
ability to read or change anything in that account.
</p>

<h2>What data it reads</h2>
<ul>
  <li>Account information: name, currency, time zone, status.</li>
  <li>Campaign, ad group and keyword performance: impressions, clicks, cost, conversions,
      conversion value.</li>
  <li>Search terms that triggered ads.</li>
  <li>Existing ad text and final URLs.</li>
  <li>Conversion action configuration and status.</li>
</ul>
<p>
The tool does not access the personal data of individuals who saw or clicked on an
advertisement. The data it reads is aggregated advertising performance data belonging to
the advertiser.
</p>

<h2>Safeguards</h2>
<div class="box">
<p style="margin:0">
No change reaches a live advertising account without a person approving it. There is no
code path that applies a change directly.
</p>
</div>
<ul>
  <li><strong>Allow-listed operations.</strong> Writes are restricted to a fixed list
      defined in code. Anything else is rejected before a request is built.</li>
  <li><strong>Human approval on every change.</strong> Proposals are stored and shown with
      the data that motivated them, and applied only on an explicit confirmation.</li>
  <li><strong>Everything created paused.</strong> New campaigns, ad groups and ads are
      created in a paused state at all three levels. They serve no impressions and spend
      nothing until a second, separate confirmation.</li>
  <li><strong>Daily budget ceiling</strong> enforced in code; a proposal above it is
      refused before it reaches a person.</li>
  <li><strong>Validation before launch.</strong> The tool re-reads the live account and
      refuses to launch if there are no ads, if ads were disapproved, if no budget is set,
      or if the budget exceeds the ceiling.</li>
</ul>

<h2>Who uses it</h2>
<p>
Agency employees only &mdash; fewer than five people &mdash; through a private chat
restricted to an explicit list of accounts. There is no web front-end, no public
registration, and no mechanism by which an advertiser or any third party can reach the
Google Ads API through this tool.
</p>

<h2>Data handling</h2>
<p>
Data retrieved from the Google Ads API is used solely to manage the advertising account
it came from, on behalf of the client who owns it. It is never sold, sublicensed, shared
with third parties, or combined with data from other advertisers. Our use of information
received from Google APIs adheres to the
<a href="https://developers.google.com/terms/api-services-user-data-policy">Google API
Services User Data Policy</a>, including its Limited Use requirements. Full details are
in our <a href="/privacy">Privacy Policy</a>.
</p>

<h2>Contact</h2>
<p>
ADS CONTROL<br>
<a href="mailto:serhii_ceo@adscontrol.io">serhii_ceo@adscontrol.io</a>
</p>

<footer>
  <a href="/">ADS CONTROL</a> &middot; <a href="/privacy">Privacy Policy</a> &middot;
  <a href="/terms">Terms of Use</a>
</footer>`;

export default function AdsAgent() {
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
