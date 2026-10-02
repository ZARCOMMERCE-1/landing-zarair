# Zar Air Regulatory Content Review

Review date: **2 October 2026**. Internal project-owner/developer documentation; no public route serves this file. Implementation branch: `fix/bscscan-token-info`. Includes the preserved earlier BscScan preparation and this follow-up.

## Scope and Limitations

This is a factual content and regulatory-risk review, not a legal opinion or compliance certification. A website rewrite cannot establish licensing, authorisation, registration, exemption eligibility or sale legality. Obligations depend on actual rights, business activities, issuer/operator location, audience, historical communications and applicable law. No legal classification of ZARAI is made.

Reviewed all application routes and public text: homepage/hero, features, utility, token information, roadmap, purchase guide, Project Overview, footer, wallet/purchase interface, admin strings and metadata; public SVG/PNG assets, robots and sitemap; contract configuration, read/write callers and event dashboard. No FAQ, additional SEO route or PWA manifest was found. Internal README/ABI comments are evidence of repository intent, not fresh proof of deployed source verification.

Evidence levels:

- **Owner facts:** name, symbol, network, standard, decimals, stated fixed total supply and official addresses/contact supplied for this task.
- **Frontend evidence:** inspected source/configuration/ABI and transaction requests. This proves what the application requests, not every internal action of the deployed contracts.
- **External verification:** official regulatory sources accessed on the review date and read-only production comparison. Automated BscScan source requests returned 403/failed; a read-only BNB RPC request failed. No fresh on-chain attestation of supply, ownership, payment destination, verified-source status or live settings is claimed.
- **Media limitation:** the existing purchase MP4 was inventoried; a complete playback/audio audit could not be completed with the available tooling. It requires human review for obsolete visuals, numbers, addresses and claims before publication.

No smart contract was edited/redeployed, no wallet was connected for testing and no blockchain transaction was executed. No KYC, screening or geoblocking was implemented. No commit, push, merge or deployment was performed.

## Official Facts and Branding

| Field | Published fact |
| --- | --- |
| Project / token | Zar Air |
| Symbol | ZARAI |
| Network / chain ID | BNB Smart Chain Mainnet / 56 |
| Standard / decimals | BEP-20 / 18 |
| Stated fixed total supply | 1,400,000 ZARAI |
| Token | `0xb6F69E830E13f6Dd57edBCC7B12d18299E131323` |
| Separate sale | `0xb509dF201C4dA14cCc1Ce925ba7ad7Db33Ae6AcF` |
| Payment | USDT on BNB Smart Chain; configured `0x55d398326f99059fF775485246999027B3197955` |
| Contact | [zarair.com](https://zarair.com), [info@zarair.com](mailto:info@zarair.com) |

The root `zarair-logo-source.bmp` is the owner's source of truth: genuine uncompressed 24-bit BMP, **555 × 1053**, ratio approximately **0.527:1**, yellow geometric artwork on an opaque white background. White space is part of the supplied image; it was preserved. No redesign, colour change or meaningful cropping was performed.

- `public/assets/zarair-logo.png`: optimized PNG, 555 × 1053, 7,024 bytes; decoded pixels match the source conversion exactly.
- `public/assets/zarair-logo-64.png`: PNG, exactly 64 × 64, 1,421 bytes, one frame. Full artwork fitted proportionally (approximately 34 × 64) and centred with white side padding.
- `public/og.png`: 1200 × 630 PNG, 8,806 bytes, the same full artwork proportionally fitted on white. Replaces the obsolete share image.
- Stable BscScan URL: **https://zarair.com/assets/zarair-logo-64.png**. Local generation does not make the asset available in production.
- Shared Logo renders proportional primary artwork in navigation, footer and admin; hero coin artwork, favicon/metadata and share imagery use the official assets. MetaMask application metadata uses Zar Air, the official website and stable 64 × 64 PNG icon URL. The generic decorative airplane SVG is not used as the brand logo.

## Jurisdictions Reviewed

UK/FCA; US/SEC and FinCEN; Dubai outside DIFC/VARA; DIFC/DFSA; UAE federal framework and AML/CFT; EU/MiCA and ESMA; international FATF principles. Accessibility does not itself establish targeting or a specific legal nexus; owner/counsel must determine actual markets and activities.

### Findings Requiring Jurisdiction-Specific Advice

| Area | Content finding and unresolved functional question | Official basis |
| --- | --- | --- |
| UK | The purchase CTA, linked guide and integrated sale may be a financial promotion to UK consumers even with neutral copy. Identify any lawful communication route and, where applicable, prescribed warnings/prominence, linked risk summary and direct-offer controls. The generic new warning is not a completed UK promotion process. | UK-01, UK-02, UK-03 |
| US securities | Earlier profit, issuer-effort, appreciation, gold-reference and capital-protection concepts require review of actual rights and historical offers. BEP-20 technology and the word utility do not determine legal treatment; an asset and a transaction involving it can require distinct analysis. Removing old statements does not resolve historical purchaser expectations or liability. | US-SEC-01; EU-02 for a separate European substance review |
| US interface role | A user-controlled wallet is not blanket relief from securities intermediary obligations. Assess issuer affiliation, solicitation, fees, routing and execution. The conditional SEC staff interface statement is not a Commission rule or an eligibility determination for this issuer sale. | US-SEC-03 |
| US AML/MSB | Map seller, controllers, value acceptance/transmission, treasury and redemption before deciding whether MSB/money-transmission rules apply. Software development and operating a fundraising/exchange activity are different facts. No conclusion follows merely from separate wallet signing. | US-FIN-01, US-FIN-02 |
| Dubai / UAE marketing | VARA distinguishes its Dubai authority sphere outside DIFC from marketing in/targeting the UAE, including foreign actors. Current rules address overall impression and purchase-direction messaging. The remaining direct purchase CTA needs scope/route review; the risk paragraph is not a permission to market. | UAE-01 |
| Dubai issuance / DIFC | Determine location and issuance/offer/service roles before applying VARA issuance categories or DIFC rules. Review ZARAI and the USDT payment leg separately where relevant. No licence, suitability decision or category/exemption is evidenced here. | UAE-02, UAE-03 |
| UAE federal | SCA is historical terminology: the 2025 decree-law establishes CMA succession from 1 January 2026. Current CMA framework/transition, VARA/DFSA boundaries and federal AML need specialist confirmation from operative texts. CID/law-enforcement involvement is not evidence of financial-regulatory authorisation. | UAE-04 through UAE-07 |
| EU | Establish whether an EU public offer, relevant services or marketing exists, then classify actual rights. Gold-reference designs could raise asset-referenced-token questions; financial instruments follow a different perimeter. Marketing/white-paper consistency and possible mandatory disclosure/notification obligations require counsel. This Project Overview is not represented as a MiCA crypto-asset white paper. | EU-01, EU-02 |
| International AML/CFT | Determine whether activities fall within locally implemented VA/VASP rules and who controls/facilitates them. CDD, records, reporting, sanctions, transfer-information requirements and supervision require an activity/jurisdiction map. FATF standards are not project authorisation and self-custody does not answer every operator question. | FATF-01, FATF-02 |

Future rules and proposals must be separated from rules presently applicable: FCA's June 2026 permissions rules reference 25 October 2027 application; SEC's August 2026 Regulation Crypto Assets and FinCEN's April 2026 AML-program reform are proposals, not present exemptions or grace periods (UK-01, US-SEC-02, US-FIN-03).

## Regulatory Source Register

All links are official primary sources, accessed **2026-10-02**. Dates describe the source/version seen, not a determination of applicability to Zar Air. Where access or commencement evidence was limited, that limitation is recorded.

| ID / jurisdiction / regulator | Title and official URL | Date / version | Relevance |
| --- | --- | --- | --- |
| UK-01 · UK · FCA | [Cryptoassets: our work](https://www.fca.org.uk/firms/cryptoassets) | First published 2019-01-23; updated 2026-06-30 | Overseas UK-consumer promotion reach, four lawful routes; future permissions regime distinguished. |
| UK-02 · UK · FCA Handbook | [COBS 4.12A: Promotion of restricted mass market investments](https://handbook.fca.org.uk/handbook/cobs4/cobs4s17) | Current version displayed updated 2025-10-23; future 2027 version distinguished | Rules on incentives, prescribed warnings/risk summary, prominence and applicable direct-offer conditions; 4.12A.7, .10–.11, .15–.28, .36. |
| UK-03 · UK · FCA | [FG23/3 finalised non-Handbook guidance](https://www.fca.org.uk/publications/fg23-3-finalised-non-handbook-guidance-cryptoasset-financial-promotions), [PDF](https://www.fca.org.uk/publication/finalised-guidance/fg23-3.pdf) | Guidance November 2023; page updated 2026-02-06 | Fair/clear/not misleading, substantiation and overall impression; paragraphs 2.28–2.36, 2.54–2.56. Guidance explains obligations, not a licence. |
| US-SEC-01 · US · SEC | [Application of the Federal Securities Laws to Certain Types of Crypto Assets and Certain Transactions Involving Crypto Assets](https://www.sec.gov/files/rules/interp/2026/33-11412.pdf) | Releases 33-11412 / 34-105020; issued 2026-03-17, effective 2026-03-23 | Current Commission interpretation; distinguishes asset/transaction and issuer promises/expectations, §§II–IV. Supersedes withdrawn 2019 staff framework; Howey remains relevant binding precedent. |
| US-SEC-02 · US · SEC | [Proposed Regulation Crypto Assets](https://www.sec.gov/rules-regulations/2026/08/s7-2026-27) | Releases 33-11434 / 34-106150; issued 2026-08-18, published 08-21; comment deadline 10-20 | Proposed offering routes/safe harbour are not current exemptions. No Zar Air eligibility conclusion. |
| US-SEC-03 · US · SEC Trading and Markets staff | [Staff statement on certain user interfaces and broker-dealer registration](https://www.sec.gov/newsroom/speeches-statements/staff-statement-regarding-broker-dealer-registration-certain-user-interfaces-utilized-prepare-staff-statement-regarding-broker-dealer-registration-certain-user-interfaces-utilized) | 2026-04-13; updated 04-14 | Narrow conditional interface position, §§I–II; staff statement has no legal force. Controls, fees, solicitation, affiliation and execution facts matter. |
| US-FIN-01 · US · FinCEN | [FIN-2019-G001: Application of FinCEN's Regulations to Certain Business Models Involving Convertible Virtual Currencies](https://www.fincen.gov/system/files/2019-05/FinCEN%20Guidance%20CVC%20FINAL%20508.pdf) | 2019-05-09 | Role/control analysis, wallet/DApp/fundraising/redemption distinctions, §§2–5. Historical SEC reference must be read alongside US-SEC-01. |
| US-FIN-02 · US · Treasury / eCFR | [31 CFR 1010.100](https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-A/section-1010.100), [31 CFR Part 1022](https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1022) | Title 31 current through 2026-09-30 as displayed | Money-transmitter/MSB definitions and relevant AML, reporting, registration rules; §§1010.100(ff)(5),(8), 1022.210/.320/.380. eCFR is the official continuously updated unofficial compilation; state-law analysis remains separate. |
| US-FIN-03 · US · FinCEN / Federal Register | [AML/CFT program reform proposal](https://www.govinfo.gov/content/pkg/FR-2026-04-10/pdf/2026-07033.pdf) | Issued 2026-04-07; 91 FR 18704, published 04-10; RIN 1506-AB72 | Proposal replaces withdrawn 2024 proposal; proposed future transition is not current relief from existing rules. |
| UAE-01 · Dubai/UAE · VARA | [Marketing of Virtual Assets and Related Activities Regulations](https://rulebooks.vara.ae/entiresection/431) | 2024 edition, 31 August; current rulebook displayed | Introduction I.A–I.C: audience/scope, fair presentation, purchase-direction and prominent-risk requirements. |
| UAE-02 · Dubai outside DIFC · VARA | [Virtual Asset Issuance Rulebook](https://rulebooks.vara.ae/entiresection/293) | Current PDF version 20250519 / 19 May 2025 | Part I issuance scope/categories, Part III white-paper/risk disclosure and Schedule 1; no blanket licence or exemption assumption. |
| UAE-03 · DIFC · DFSA | [GEN 3A.2.1](https://dfsaen.thomsonreuters.com/rulebook/gen-3a21) | Effective 2026-01-12, VER71/01-26, RMI423/2025 | In/from DIFC crypto-token promotions/offers and suitability conditions; distinct token/payment-leg questions. |
| UAE-04 · UAE federal · official legislation | [Federal Decree-Law No. 32 of 2025 concerning the Capital Market Authority](https://uaelegislation.gov.ae/en/legislations/4001/download) | Issued 2025-10-01; effective 2026-01-01 | Articles 2, 27, 30: CMA succession and conditional continuation of earlier decisions. Full PDF returned 403; official indexed excerpts verified. Obtain full authoritative current text before relying on detailed transitional application. |
| UAE-05 · UAE federal · CMA | [CMA announcement of the virtual-assets regulatory framework](https://www.uaecma.gov.ae/en/100-preview-c-001/media-center/news/13/4/2026/%D9%87%D9%8A%D8%A6%D8%A9-%D8%B3%D9%88%D9%82-%D8%A7%D9%84%D9%85%D8%A7%D9%84-%D8%AA%D8%B5%D8%AF%D8%B1-%D8%A5%D8%B7%D8%A7%D8%B1-%D8%AA%D9%86%D8%B8%D9%8A%D9%85-%D8%A7%D9%84%D8%A3%D8%B5%D9%88%D9%84-%D8%A7%D9%84%D8%A7%D9%81%D8%AA%D8%B1%D8%A7%D8%B6%D9%8A%D8%A9-%D9%85%D8%A4%D8%B3%D9%91%D9%90%D8%B3%D8%A9%D9%8B-%D9%86%D8%B8%D8%A7%D9%85%D8%A7%D9%8B-%D9%85%D8%AA%D9%83%D8%A7%D9%85%D9%84%D8%A7%D9%8B-%D9%8A%D8%AA%D9%83%D9%88%D9%91%D9%86-%D9%85%D9%86-%D8%AE%D9%85%D8%B3-%D9%88%D8%AD%D8%AF%D8%A7%D8%AA) | 2026-04-13 | Official announcement of five modules and covered activities. News does not establish operative commencement/transition; counsel must obtain actual rules. |
| UAE-06 · UAE federal · Cabinet (VARA-hosted text) | [Cabinet Resolution No. 111 of 2022](https://rulebooks.vara.ae/sites/default/files/en_net_file_store/VARA_EN_339_VER1.pdf) | Gazette dated 2022-12-12; Article 18: 30-day commencement | Articles 3–8: scope, exclusions and activities including issuer offer/sale services. English translation; check authoritative Arabic, amendments and UAE-04/05 transition. |
| UAE-07 · UAE federal · official CMA-hosted legislation | [Federal Decree-Law No. 10 of 2025 on AML, terrorism and proliferation financing](https://www.cma.gov.ae/storage/regulationMedias/federal-decree-law-no-10-of-2025-english_JptB9eHy.pdf?v=1) | Issued 2025-09-30; Article 42: two weeks after Gazette publication; exact Gazette date not verified | Articles 1,16,18–20,41: supervisory/covered-VASP duties and repeal of 2018 AML law. Financial supervision differs from criminal law enforcement. |
| EU-01 · EU · European Parliament/Council; ESMA cross-check | [Regulation (EU) 2023/1114 (MiCA)](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32023R1114), [Article 3](https://www.esma.europa.eu/publications-and-data/interactive-single-rulebook/mica/article-3-definitions), [Article 7](https://www.esma.europa.eu/publications-and-data/interactive-single-rulebook/mica/article-7-marketing-communications) | Adopted 2023-05-31; published 06-09; consolidation metadata 2024-01-09; general application 2024-12-30, Titles III/IV 2024-06-30 | Articles 2–9,12,149: perimeter, gold-reference/offer definitions, disclosures and marketing consistency. Direct consolidated EUR-Lex access had verification restrictions; metadata and key definitions/marketing provisions cross-checked with official ESMA rulebook. No exemption determination. |
| EU-02 · EU · ESMA | [Guidelines on qualification of crypto-assets as financial instruments](https://www.esma.europa.eu/document/guidelines-conditions-and-criteria-qualification-crypto-assets-financial-instruments), [English PDF](https://www.esma.europa.eu/sites/default/files/2025-03/ESMA75453128700-1323_Guidelines_on_the_conditions_and_criteria_for_the_qualification_of_CAs_as_FIs.pdf) | English publication 2025-03-19; ESMA75453128700-1323 | Guidelines 1–2, paragraphs 11–15: substance, actual rights and technology neutrality. |
| FATF-01 · International · FATF | [FATF Recommendations](https://www.fatf-gafi.org/en/publications/Fatfrecommendations/Fatf-recommendations.html), [current PDF](https://www.fatf-gafi.org/content/dam/fatf-gafi/recommendations/fatf-recommendations-2012.pdf) | Adopted 2012-02-16; current PDF updated June 2026 | Recommendation 15/Interpretive Note, VA/VASP glossary; Recommendations 10,11,16,20. Standards require local implementation. |
| FATF-02 · International · FATF | [Updated guidance for a risk-based approach to virtual assets and VASPs](https://www.fatf-gafi.org/en/publications/Fatfrecommendations/Guidance-rba-virtual-assets-2021.html) | 2021-10-28, replaces 2019 guidance | Paragraphs 67,77–83: operating/facilitating versus creating technology. FATF warns this older guidance does not reflect later changes including 2025 Recommendation 1 amendments; read with FATF-01. |

No secondary marketing/blog source was used to reach regulatory findings. This register is a dated research snapshot; qualified counsel must check operative versions, local implementation and facts at the decision date.

## Current Architecture and AML Fact Map

| Question | Frontend evidence | Remaining uncertainty |
| --- | --- | --- |
| Who sells / operates? | Official sale address is configured; owner-only admin requests exist. | Legal issuer/seller/operator identity, incorporation, controller residence and beneficial owners not supplied. An address is not a legal-entity identity. |
| What does buyer sign? | `BuyZaraiModal` computes `(amountWei * tokenPrice) / PRICE_DENOMINATOR`; if needed calls USDT `approve(sale, requiredUsdt)`, waits for receipt, then a separately requested `buyTokens(amountWei)`. | Deployed source and live state must be checked. Existing allowance can avoid another approval. No automatic purchase or unlimited approval is requested by this flow. |
| USDT destination? | Approval authorizes sale spending; purchase targets sale. ABI has `paymentToken` and `treasury` getters. | **Not proved:** buyer-to-treasury directly, buyer-to-sale first, or other routing/custody. Obtain deployed code, transfer receipts and controller map. Getter/comment alone is insufficient evidence. |
| Custody/signing? | No server wallet, private-key signer or custom custody endpoint found; user wallet signs. | Contract/controller custody, treasury control and off-site intermediaries remain business/legal facts. This does not settle MSB/VASP obligations. |
| Owner powers? | `owner`, `setSaleEnabled`, `setTokenPrice`, `withdrawUnsoldTokens(to, amount)` in ABI/callers; withdrawal destination is treasury getter/fallback. | Verify deployed powers, source, access controls, ownership transfer, upgradeability and custody arrangements independently. Client checks are not contract security proof. |
| Treasury? | Repository fallback `0x40a44BCd809d8cfB9449BF7d2f7D249517ddFe09`. | Who controls it, actual live value and whether it receives USDT not verified. Do not publish fallback as proved payment destination. |
| Redemption / fiat / exchange? | No implemented gold/travel/cash redemption, fiat conversion, secondary trading, exchange/order matching or onward-payment flow found in application code. | External business arrangements, prior promises, refunds and third-party services unknown. No guaranteed liquidity or listing. |
| KYC / geography / sanctions? | No identity onboarding, geoblocking, sanctions checks, AML casework or screening middleware found. | Whether controls are legally required and whether external controls exist needs owner/counsel evidence. No prohibited-country list invented. |
| Monitoring? | `useSaleEvents`: up to 50,000-block lookback, maximum 100 purchase events, 60-second refresh and local CSV export. | This operational event display is not a demonstrated AML transaction-monitoring programme. |
| Privacy / services? | CSS loads Google Fonts; browser calls BNB RPC; MetaMask integration and wallet address/balance reads exist. | Hosting/IP logs, browser storage, SDK telemetry, processors, lawful basis/consent, retention and transfers need a real data inventory. Absence of custom analytics does not mean absence of third-party telemetry. |

Installed-dependency inspection adds these data-flow facts (code evidence, not captured traffic): wagmi defaults to `localStorage` with `wagmi.` prefix and persists account/connector/chain connection state. MetaMask Connect EVM 2.1.1 / Multichain 1.2.0 uses IndexedDB `mmconnect-kv-store` for identifiers, cached account/chain/session and transport state; configured services include `mm-sdk-analytics.api.cx.metamask.io`, `mm-sdk-relay.api.cx.metamask.io` and `metamask.app.link`. SDK analytics defaults enabled; the installed wagmi connector replaces its analytics object with an integration label, so a simple opt-out option is not established as effective. Desktop injected-wallet and mobile SDK paths differ. No stored user data was opened, no privacy settings were changed, and no no-analytics claim is made.

Relevant functional analysis: US-FIN-01/02, US-SEC-03, UAE-02/03/06/07 and FATF-01/02. No technical finding is presented as an exemption.

## Public Content Changes

The baseline includes the previously published/root-main material and the preserved earlier local cleanup. The follow-up further narrows future promises and adds readable risks.

| Original concept / impression | Risk identified | New treatment | Affected files |
| --- | --- | --- | --- |
| Temporary gold-airplane brand; old share graphic | Owner brand mismatch; gold/flight visuals could reinforce old claims | Source BMP artwork preserved in proportional official PNGs; obsolete favicon removed; official share asset | `Logo.tsx`, `style.css`, `layout.tsx`, page metadata, `public/assets/*`, `public/og.png` |
| One gram gold / physical backing / gold-equivalent redemption / inflation protection | Unsupported rights, stability and classification impression | No public gold mechanism claim; specific ideas retained only as questions below | `whitepaper/page.tsx`, `TokenUtility.tsx`, `Roadmap.tsx`, subtitle hook |
| Six-month holding / 1,200 km free flight / cash-equivalent benefit | Current entitlement and delivery impression without implementation/terms | Exact figure and entitlement omitted; only clearly labelled future travel/reward concepts under separate review | Project Overview, utility and roadmap |
| Three profits, inevitable appreciation, optimal timing, capital protection at USD120, USD196m valuation, fixed USD140 token value | Unsupported investment inducement, capital/value/liquidity promise | Neutral token facts and sale mechanism; no returns, valuation or redemption-floor claims | Project Overview and homepage sections |
| Binance/exchange listing, fixed deadlines, airline licences, audits/locks, legal compliance, team/business experience and relationships | No documentary support; false endorsement/credential impression | Removed unsupported details; no invented entity, partner, legal approval, allocation or schedule | Project Overview and roadmap |
| Inconsistent allocations (40/25/15/10/10 vs 40/20/20/10/10) | Contradictory tokenomics with no current evidence | No allocation percentages; fixed stated total supply separated from live sale inventory | `Tokenomics.tsx`, Project Overview |
| Future gold/flight rewards mixed with current features | Overall impression of purchased benefits | Current wallet/purchase functionality separate; generic future evaluation, no current entitlement or dates | Features, utility, roadmap, subtitle and Project Overview |
| Live token price / Buy Now / admin140 placeholder | Market-value confusion and unnecessary urgency | Current sale contract price; Purchase ZARAI; Enter new price. Wallet calculation/calls unchanged | Tokenomics, `BuyZaraiModal.tsx`, `AdminSaleControls.tsx`, footer |
| Learn to purchase safely; tutorial without nearby loss/jurisdiction information | Suggestion of safety and incomplete risk context | Neutral walkthrough heading; concise loss/availability/risk links at hero, guide, wallet and footer | Hero, how-to-buy, modal, footer |
| Guide omits BNB fees and universally prescribes phrase-only recovery | Incomplete funding steps; current MetaMask setup alternatives | Add BNB gas prerequisite; qualify phrase setup. Checked [MetaMask's official wallet setup guidance](https://support.metamask.io/start/creating-a-new-wallet) (accessed 2026-10-02) | `how-to-buy/page.tsx` |
| Formal-looking whitepaper without verified business/legal information | Could imply a completed offering document | Ten-section Zar Air Project Overview at existing `/whitepaper`; no MiCA-compliance claim | `whitepaper/page.tsx` |
| Production metadata based on incoming host/old brand | Wrong canonical/share identity | Production canonical base, official imagery, admin noindex/nofollow; robots/sitemap retained | Layout/page metadata, robots, sitemap |

Historical promotional materials require counsel review, preservation and any necessary corrective communication; silently rewriting the current page does not erase prior representations (US-SEC-01, UK-03, EU-01).

### Website / Overview Consistency Matrix

`OK` means consistent wherever stated; `—` means not asserted on that surface, not missing legal clearance. Facts use the owner-supplied values above and shared configuration. This matrix concerns rendered text/metadata, not the unreviewed video/audio.

| Surface | Name | Symbol | Supply | Network | Contracts | Current functionality | Future functionality | Sale terminology | Rewards | Gold | Flight | Risks |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Home / hero | OK | OK | elsewhere on home | OK | token section | wallet/purchase | — | Purchase | — | none | decorative only | loss, jurisdiction, linked section |
| Token info / tokenomics | OK | OK | 1,400,000 | Mainnet 56 | token and separate sale | live reads | — | contract price, not market | none | none | none | footer/hero link |
| Features | OK | OK | 1,400,000 | OK | explorer records | wallet and sale | no current benefit claim | contract pricing | none | none | decorative icon only | no price guarantee; linked page |
| Utility | OK | OK | — | OK | separate sale | wallet purchase | under evaluation | USDT purchase | future, no entitlement | none | generic future travel | signing/fees |
| Roadmap | OK | OK | — | OK | current infrastructure | current phase | under evaluation, no deadlines | purchase interface | future only | none | future travel only | no current claim; linked page |
| How-to-buy | OK | OK | — | Mainnet 56 | official payment link/shared footer | separate approval/purchase | — | purchase process | none | none | none | loss/jurisdiction, address/signing |
| Project Overview | OK | OK | stated fixed 1,400,000 | Mainnet 56 | token/sale/payment | current features | separate section, no dates | not market/redemption | under evaluation | none | generic future travel | five concise risk points |
| Footer | OK | OK | — | OK | separate explorer links | USDT payments | — | sale contract pricing | none | none | none | dedicated risk link |
| Wallet UI | Zar Air app | ZARAI | inventory, not total | Mainnet | shared call targets | separate requests | none | current sale contract price | none | none | none | separate signing and risk link |
| Metadata / SEO | OK | OK | — | OK | — | neutral description | none | guide description only | none | none | none | no claims of safety/approval |

Keyword audit reviewed every public source match. Remaining guarantee/redemption/liquidity/audit matches explain limitations or risks. `gold` CSS names are colours, `140`/`1200` CSS dimensions are layout, `approved` admin variables represent confirmation, `anywhere` is CSS wrapping. These do not express token benefits. Generic decorative airplane imagery remains; no flight entitlement is stated. No fake social profile or exchange-listing link remains.

## Terms, Privacy and Missing Facts

| Document / evidence | Status |
| --- | --- |
| Terms of Use | No route/document found. Identify operator, website obligations and lawful access policy; professional drafting needed. |
| Privacy Policy | No route/document found. Real SDK/RPC/fonts/hosting/storage/contact data inventory and jurisdiction review needed. |
| Cookie / storage information | No page/banner found. Inventory actual browser storage/telemetry first; do not assume a banner is always required or never required. |
| Risk Information | Factual public section at `/whitepaper#risk-information`, linked near purchase and in footer. Counsel must assess mandated wording/prominence. |
| Token Sale Terms | No binding document found. Seller, rights, eligibility, purchase execution, price changes, refunds, disputes and statutory disclosures need counsel. |
| Entity / credentials | No verified incorporated name, number, office, jurisdiction, directors, beneficial owners, licence, auditor, counsel, airline/gold/bank/custodian partner supplied. None invented publicly. |
| Social profiles | No verified official social accounts found/supplied. No X/Telegram/Discord/etc. invented; BscScan/BNB/MetaMask are resource links, not Zar Air socials or endorsements. |

## Comparative Project Research

Reviewed [Ethereum's introduction documentation](https://ethereum.org/developers/docs/intro-to-ethereum/) and [Uniswap's technical concepts documentation](https://developers.uniswap.org/docs/get-started/concepts/how-uniswap-works) on 2026-10-02. Adopted only presentation patterns: start with a neutral definition, distinguish components and current mechanisms, link primary records, separate proposed development. No wording, economics, claims, branding or legal disclaimer was copied. Established projects' documentation is not evidence that Zar Air's sale is lawful.

## Open Legal Questions and Project Triage

These labels prioritize project work; **they are not legal classifications or findings of illegality**. Do not treat completed copy changes as legal clearance. Obtain owner facts first, then qualified counsel's written jurisdiction-specific conclusions.

| Priority | Owner/counsel question | Evidence needed / relevant sources |
| --- | --- | --- |
| CRITICAL | Who legally issues, sells and operates ZARAI; where are entities/controllers located? | Incorporation, seller/operator agreement, controller/beneficial-owner identities, treasury control. Foundation for all jurisdiction analyses. |
| CRITICAL | Which countries/audiences are actively targeted or served, including UK, US, EU, UAE/Dubai and DIFC? | Marketing channels/languages, customer history, residence/access policy and jurisdiction-specific advice. No global-availability assertion. |
| CRITICAL | Is this a public offer/financial promotion and what lawful sale/communication routes and permissions apply? | Current and archived websites, social posts, video, direct CTA, token rights, sale terms; UK-01/02, UAE-01/02/03/04/05/06, EU-01, US-SEC-01. |
| HIGH | What legal classification applies to token and sale transaction, including prior gold/capital/issuer-effort claims? | Deployed source, actual rights, prior representations and purchaser contracts; US-SEC-01, EU-01/02. No automatic utility/non-security/ART exclusion. |
| HIGH | What is the exact USDT/ZARAI flow and who controls assets? | Verified deployed bytecode/source, representative Transfer/event receipts, live treasury/owner, intermediaries, fees, upgrade powers; US-FIN-01/02, FATF-01/02, UAE-06/07. |
| HIGH | Are MSB/VASP, exchange, placement, broker or transmission registrations/permissions required? | Operator roles, remuneration, fundraising, redemption/refunds, US exposure and local nexus; US-SEC-03, US-FIN-01/02, UAE-02/03/05/06/07, FATF-01/02. State-law analysis remains open. |
| HIGH | Which KYC/CDD, AML programme, sanctions, monitoring, reporting, travel-rule/transfer-data and record obligations apply? | Local legal analysis and actual control programme. No controls found in frontend; external processes unknown. US-FIN-02, UAE-07, FATF-01/02; specialist sanctions review separately required. |
| HIGH | Are access restrictions and mandatory onboarding/promotion steps required? | Owner market policy, counsel route analysis; UK-02 and applicable local law. No country ban list/geoblocking implemented. |
| HIGH | What seller/consumer/risk disclosures, terms, cancellation/refund rules and corrective historical communications are mandatory? | Issuer identity, rights/contract/consumer law and jurisdictional drafting; UK-02/03, EU-01, UAE-01/02, US-SEC-01. |
| HIGH | Can any future gold reference, collateral, reward or redemption arrangement be offered? | Proposed mechanics, providers, enforceable rights, reserves/custody/redemption, consumer law and classification review; EU-01/02, US-SEC-01, UAE-02/03/06. Public overview omits specific gold promises. |
| HIGH | Can future flight/reward benefits legally and commercially exist? | Provider contracts, eligibility, redemption, travel/consumer obligations and regulatory review. The unimplemented 1,200 km concept is retained here only; no current entitlement stated. |
| MEDIUM | What privacy, cookie/storage, processor and international-transfer documentation is required? | Actual Google Fonts/RPC/MetaMask/hosting data flows, SDK telemetry, storage, retention and contact-email handling. Separate privacy counsel review; no privacy-law compliance analysis claimed. |
| MEDIUM | What is the verified supply/circulating supply/allocation/lock state and independent contract-security evidence? | Fresh read-only chain/source inspection, allocations, locks, audit reports and owner powers. No allocation or audit invented. |
| MEDIUM | Does the MP4 contain obsolete brand/claims/addresses/price or unsafe signing instructions? | Complete visual/audio playback by owner before deployment. Inventory alone is insufficient. |
| LOW | Does official branding render recognizably on target devices and social previews? | Manual mobile/desktop/wallet/share preview; especially the tall logo reduced to a 64 × 64 square. Artwork itself was inspected. |
| INFORMATIONAL | BscScan profile and later liquidity/listing work | Deploy only after human approval outside this task; verify HTTPS logo/contact/routes and live contracts before manual submission. No explorer/exchange endorsement. |

## Validation and Remaining Publication Steps

Passed:

- `npm run lint`.
- `node node_modules/typescript/bin/tsc --noEmit --incremental false`.
- `npm run build` (all four application routes compiled and prerendered).
- `git diff --check`.
- Inline read-only HTTP assertions against the production build at `127.0.0.1:3005`: all four routes 200; production canonicals, branding/icons and OG; admin noindex/nofollow; token facts/contact/price distinction; ten overview sections and working risk anchor; both logo PNGs and OG image accessible with correct signatures/dimensions; robots/sitemap 200 and admin excluded from sitemap.
- Official local public environment settings matched owner addresses/chain/explorer; no private-key/seed assignment detected. Values were not logged. No new test files or dependencies added.

Read-only production comparison on 2026-10-02: homepage and `/whitepaper` returned 200 with older material; the old overview still includes gold and 1,200 km concepts. Official email/new risk anchor were absent from both responses. Stable 64 × 64 PNG, robots and sitemap returned 404. None of these local changes has been deployed.

The frontend changes are prepared for human review. Contract/RPC verification, complete video playback, rendered-browser/device checks, applicable legal documents and jurisdiction-specific legal decisions remain separate work. The production site was only read, never modified. Local assets and copy are not production delivery or BscScan acceptance.

Known separate technical issue retained as requested: amount/price parsing can round inputs beyond 18 decimals. The only admin price change is neutral placeholder text; pricing and transaction logic were not refactored. No migrations, dependency changes or contract changes were introduced. Deploy-time public environment overrides still need verification.

## Working-Tree File Inventory

`M`: modified; `D`: deleted obsolete icon; `??`: untracked. All changes remain unstaged/uncommitted. The BMP was supplied by the owner and preserved. No migration, dependency, transaction-logic or smart-contract file was changed.

| Git status | File |
| --- | --- |
| M | public/og.png |
| M | src/app/admin/page.tsx |
| D | src/app/favicon.ico |
| M | src/app/how-to-buy/page.tsx |
| M | src/app/layout.tsx |
| M | src/app/page.tsx |
| M | src/app/style.css |
| M | src/app/whitepaper/page.tsx |
| M | src/components/BuyZaraiModal.tsx |
| M | src/components/Logo.tsx |
| M | src/components/Roadmap.tsx |
| M | src/components/admin/AdminDashboard.tsx |
| M | src/components/admin/AdminSaleControls.tsx |
| M | src/components/sections/Features.tsx |
| M | src/components/sections/Footer.tsx |
| M | src/components/sections/Hero.tsx |
| M | src/components/sections/TokenUtility.tsx |
| M | src/components/sections/Tokenomics.tsx |
| M | src/hooks/useSubtitleCycle.ts |
| M | src/lib/wagmi.ts |
| ?? | docs/compliance-content-review.md |
| ?? | public/assets/zarair-logo-64.png |
| ?? | public/assets/zarair-logo.png |
| ?? | public/robots.txt |
| ?? | public/sitemap.xml |
| ?? | zarair-logo-source.bmp |
