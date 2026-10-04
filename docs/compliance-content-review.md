# Zar Air Regulatory Content Review

Review date: **4 October 2026**. Internal owner/developer documentation; no public route serves this file. Continuing branch: `fix/bscscan-token-info`. Preserves relevant earlier preparation evidence and incorporates the owner's current instructions. Final local validation and remaining publication blockers are recorded below.

## Scope and Limitations

This is a factual content and regulatory-risk review, not a legal opinion, classification determination or compliance certification. Website changes cannot establish licensing, authorisation, registration, exemption eligibility or sale legality. Actual token rights, offering arrangements, activities, issuer/operator location, audience and historical communications require jurisdiction-specific assessment.

Current source inspection covers the homepage, team/allocation components, fourteen-section Project Overview, dedicated Risk Disclosure, purchase interface/guide, roadmap, footer, metadata and shared owner policies. The current modal includes a risk-reading acknowledgment and action guards; the guide includes an anti-phishing/address checklist and Purchase FAQ. Current route/layout checks are recorded below; source inspection is not an executed wallet or contract test.

Evidence levels:

- **Owner facts/policies:** token specifications, initial allocation, intended rights, general jurisdiction wording and supporting-company formation details. Authoritative project instructions do not establish independent registry, regulatory or chain verification.
- **Frontend evidence:** source/configuration/ABI and transaction requests prove what the application describes or requests, not every internal action of deployed contracts.
- **Fresh regulatory research:** official primary sources accessed 2026-10-04; effective rules, interpretations, staff guidance, announcements and proposals are distinguished below.
- **Current technical limits:** BscScan web access, Sourcify source retrieval and read-only BNB RPC attempts have not supplied usable verification. No fresh attestation of no-mint behaviour, deployed-source verification, supply, token/sale ownership, treasury, allocation transfers, live balances or sale settings is claimed.
- **Historical evidence:** source-logo generation, SDK/privacy inspection, previous validation and older production comparison recorded below are dated 2026-10-02. Current asset identity and production checks are separately dated 2026-10-04; the SDK inspection is not a refreshed dependency audit.
- **Media:** current sampling found obsolete tutorial imagery, claims, historical sale values and an Unlimited spending-cap screen. The embed was removed and the original preserved byte-for-byte at `docs/media/zarair-how-to-buy.mp4`, outside public assets. Audio was not transcribed; the written guide remains the current purchase walkthrough.

No wallet connection or blockchain transaction is needed for this review. No KYC, screening, geoblocking or legal agreements are implemented by this document. Local preparation is not deployment or BscScan acceptance.

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
| Payment | Configured asset labelled USDT on BNB Smart Chain; configured `0x55d398326f99059fF775485246999027B3197955` |
| Initial sale allocation | 40% / 560,000 ZARAI; initial allocation, not live Sale Inventory |
| Initial project/owner allocation | 60% / 840,000 ZARAI; initial allocation, not verified current owner balance |
| Supporting entity | Owner identifies **ZAR COMMERCE FZE** as a member/supporting entity of the project team; not an established issuer/seller/operator designation |
| Owner-provided formation | Ras Al Khaimah Free Trade Zone Authority; **RAKFTZA-FZE-0245**; incorporation **16 June 2004** |
| Company evidence limit | Certificate image/PDF asset unavailable; no independent registry/current-status check or crypto, financial-services or airline licence is established |
| Contact | [zarair.com](https://zarair.com), [info@zarair.com](mailto:info@zarair.com) |

The following shared owner-approved wording from `src/lib/project-content.ts` is the source of truth:

> ZARAI does not provide ownership rights, dividends, profit-sharing or repayment rights. Its legal or regulatory classification may vary depending on the applicable jurisdiction and the circumstances in which it is offered or used.

> Availability may be subject to applicable laws and restrictions in the user's jurisdiction.

> According to the project's current allocation policy, the 60% project allocation is not currently offered for sale and is intended to remain unsold until the planned airline launch.

> This allocation is not currently subject to an on-chain vesting or lockup contract. Transfers remain technically possible; the policy is a management commitment, not a smart-contract restriction.

> Future travel-related and reward features are under evaluation and will require separate technical, commercial and regulatory implementation before becoming available.

> The current official public purchase flow is available through zarair.com and the official ZARAI Sale Contract.

The 40/60 allocation arithmetic matches the stated supply. Initial allocations, circulating supply and current wallet/Sale Contract balances must stay distinct. Publish the unsold policy together with the technical disclosure; do not call the owner allocation vested, locked or technically non-transferable. Incorporation in 2004 does not imply an airline operating since 2004. Company formation does not establish issuance, sale or operating permissions.

**Historical logo evidence, recorded 2026-10-02:** the root `zarair-logo-source.bmp` is the owner's source of truth: genuine uncompressed 24-bit BMP, **555 × 1053**, ratio approximately **0.527:1**, yellow geometric artwork on an opaque white background. White space is part of the supplied image; it was preserved. No redesign, colour change or meaningful cropping was performed.

- `public/assets/zarair-logo.png`: optimized PNG, 555 × 1053, 7,024 bytes; decoded pixels match the source conversion exactly.
- `public/assets/zarair-logo-64.png`: PNG, exactly 64 × 64, 1,421 bytes, one frame. Full artwork fitted proportionally (approximately 34 × 64) and centred with white side padding.
- `public/og.png`: 1200 × 630 PNG, 8,806 bytes, the same full artwork proportionally fitted on white. Replaces the obsolete share image.
- Stable BscScan URL: **https://zarair.com/assets/zarair-logo-64.png**. Current 2026-10-04 production retrieval returned 200; local asset dimensions and unchanged bytes were separately checked. Reachability does not guarantee BscScan acceptance.
- Shared Logo renders proportional primary artwork in navigation, footer and admin; hero coin artwork, favicon/metadata and share imagery use the official assets. MetaMask application metadata uses Zar Air, the official website and stable 64 × 64 PNG icon URL. The generic decorative airplane SVG is not used as the brand logo.

## Jurisdictions Reviewed

UK/FCA; US/SEC and FinCEN; Dubai outside DIFC/VARA; DIFC/DFSA; UAE federal/CMA; EU/MiCA and ESMA; international FATF standards. General accessibility does not itself determine targeting or legal nexus. Owner/counsel must identify intended markets, actual customers, marketing channels and services.

### Findings Requiring Jurisdiction-Specific Advice

| Area | Content finding and unresolved functional question | Official basis |
| --- | --- | --- |
| UK | Purchase CTA, linked guide and integrated sale may require a lawful promotion route when marketing to UK consumers, including from overseas. Generic risks or a checkbox do not replace prescribed warnings, prominence, risk summary or applicable direct-offer controls. | UK-01–03 |
| US asset / transaction | Utility and no-equity/dividend/repayment rights support precise facts but do not classify every offering transaction. Assess actual rights, issuer efforts, profit representations and historical offers. The SEC distinguishes the asset from an associated investment contract. | US-SEC-01, US-SEC-04 |
| US current / future utility | September SEC staff FAQs address current capabilities and aspirational future utility without profit promotion. Facts remain decisive and staff guidance has no legal force. Keep planned services conditional without connecting execution to token-holder returns. | US-SEC-04 |
| US interface role | User-controlled signing is not blanket intermediary relief. April staff guidance is conditional, not Commission approval of this issuer-sale interface. Assess solicitation, affiliation, fees, routing, execution and asset handling. | US-SEC-03 |
| US AML/MSB | Map issuance, exchange, custody, value acceptance/transmission, redemption and treasury roles. Utility/non-custodial labels do not determine treatment; developing software differs from operating financial activity. State-law analysis remains separate. | US-FIN-01, US-FIN-02 |
| Dubai / UAE marketing | VARA's Dubai authority excludes DIFC, while its marketing rules address activity in/targeting UAE, including foreign actors. I.C.3 prohibits messaging directing token purchase/sale and requires prominent volatility/loss/protection disclosure. The remaining purchase CTA and guide are a material marketing-nexus question. | UAE-01 |
| Dubai issuance | Current Category 2 distribution requires a licensed distributor; satisfying this does not make the token VARA-approved. A transferable future-utility token is not automatically closed-loop/exempt. Determine issuer location, characteristics and distribution. | UAE-02 |
| DIFC | DFSA is distinct from VARA. Since 12 January 2026 firms assess token suitability and there is no prescribed Recognised Crypto Tokens list. Company formation/explorer publication proves no licence, recognition or suitability. | UAE-03 |
| UAE federal | The current official site identifies CMA; SCA is historical terminology. April 2026 news describes a five-module/eight-activity framework, but detailed rules, commencement/transition and federal/VARA/DFSA/payment-service boundaries require specialist verification. | UAE-04, UAE-05 |
| EU | Determine public-offer/admission/services scope, classify actual rights and substantiate any exception. MiCA requires marketing/whitepaper consistency and applicable contact/responsibility disclosures; required whitepapers precede marketing. Planned utilities cannot be treated as already operational. This Project Overview is not claimed to be notified/approved. | EU-01–03 |
| EU services timing | Final MiCA transition expired 1 July 2026; do not treat EU licensing as an available future grandfathering period. Distinguish informational content, issuer offer and cryptoasset services. | EU-04 |
| International AML/CFT | Nationally implemented VA/VASP measures, CDD, recordkeeping/reporting, sanctions and transfer-information controls require activity/local-law mapping. FATF does not authorize projects, and risk acknowledgment does not implement these obligations. | FATF-01–03 |

The direct purchase pathway remains an unresolved jurisdiction-specific issue after content improvements. Preserve the owner's general jurisdiction wording; no automatic US/China/Canada prohibited-country list or global-availability assertion is inferred.

FCA's June 2026 FSMA rules reference application on/after **25 October 2027**. SEC's August 2026 Regulation Crypto Assets is a **proposal**, with comments due 20 October 2026. Neither supplies current exemption eligibility or a grace period.

## Regulatory Source Register

Official primary sources below were accessed **2026-10-04**. Dates identify the source/version seen, not applicability to Zar Air. Operative rules, interpretations, staff guidance, announcements and proposals are distinguished.

| ID / regulator | Official source | Date / source type | Relevance |
| --- | --- | --- | --- |
| UK-01 · FCA | [Cryptoassets: our work](https://www.fca.org.uk/firms/cryptoassets) | Updated 2026-06-30; regime overview | Overseas UK-consumer promotion reach, four lawful routes; future 2027 FSMA regime distinguished from current promotion rules. |
| UK-02 · FCA | [PS23/6 financial promotion rules](https://www.fca.org.uk/publication/policy/ps23-6.pdf) | 2023-06-08; final policy/rules, regime effective 2023-10-08 | Incentives, warnings/risk summaries and applicable 24-hour cooling-off, categorisation and appropriateness process. |
| UK-03 · FCA | [FG23/3 publication](https://www.fca.org.uk/publications/fg23-3-finalised-non-handbook-guidance-cryptoasset-financial-promotions), [PDF](https://www.fca.org.uk/publication/finalised-guidance/fg23-3.pdf) | November 2023 guidance; page updated 2026-02-06 | Paragraphs 2.28–2.36: substance/presentation, substantiation, balanced prominent risks, omissions and adequate information at each promotion stage. |
| US-SEC-01 · SEC/CFTC | [Interpretation docket](https://www.sec.gov/rules-regulations/2026/03/s7-2026-09), [release](https://www.sec.gov/files/rules/interp/2026/33-11412.pdf) | 33-11412 / 34-105020; issued 2026-03-17; effective 2026-03-23; Commission interpretation | Sections III–IV distinguish assets/digital tools and associated investment contracts. Issuer website/whitepaper representations matter. |
| US-SEC-02 · SEC | [Regulation Crypto Assets](https://www.sec.gov/rules-regulations/2026/08/s7-2026-27) | 33-11434 / 34-106150; issued 2026-08-18; **proposal**, comments due 2026-10-20 | Proposed offering exemptions/safe harbor are not present relief; no Zar Air eligibility conclusion. |
| US-SEC-03 · SEC Trading and Markets | [Certain user interfaces and broker-dealer registration](https://www.sec.gov/newsroom/speeches-statements/staff-statement-regarding-broker-dealer-registration-certain-user-interfaces-utilized-prepare-staff-statement-regarding-broker-dealer-registration-certain-user-interfaces-utilized) | 2026-04-13; conditional **staff statement**, no legal force | Sections I–II address role, solicitation, affiliation, routing, discretion, fees and execution. Not blanket self-custody relief. |
| US-SEC-04 · SEC Corporation Finance | [Crypto-asset FAQs](https://www.sec.gov/about/divisions-offices/division-corporation-finance/faqs-crypto-assets) | Issued 2026-09-25; updated 2026-09-28; **staff guidance**, no legal force | FAQ 2.1 addresses current/aspirational utility without profit promotion; 1.1 distinguishes classification definitions from an issuer's promised milestones. |
| US-FIN-01 · FinCEN | [FIN-2019-G001](https://www.fincen.gov/resources/statutes-regulations/guidance/application-fincens-regulations-certain-business-models), [PDF](https://www.fincen.gov/system/files/2019-05/FinCEN%20Guidance%20CVC%20FINAL%20508.pdf); [FIN-2013-G001](https://www.fincen.gov/resources/statutes-regulations/guidance/application-fincens-regulations-persons-administering) | 2019-05-09 and 2013-03-18; interpretive guidance | Activity/control, users/administrators/exchangers, wallet/DApp/payment/ICO/redemption models; labels are not dispositive. |
| US-FIN-02 · Treasury/eCFR | [31 CFR Part 1022](https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1022) | Current official continuously updated unofficial compilation accessed on review date | MSB AML, reporting and registration provisions, including 1022.210/.320/.380; actual applicability and state-law obligations remain open. |
| UAE-01 · VARA | [Marketing Regulations landing page](https://rulebooks.vara.ae/rulebook/regulations-marketing-virtual-assets-and-related-activities-2024), [operative text](https://rulebooks.vara.ae/entiresection/419) | Effective 2024-10-01; current marketing regulations | Introduction/I.A–I.C: scope, broad marketing definition, overall impression, urgency/incentives, purchase-direction and prominent-risk requirements. |
| UAE-02 · VARA | [VA Issuance Rulebook](https://rulebooks.vara.ae/rulebook/virtual-asset-issuance-rulebook), [full text](https://rulebooks.vara.ae/entiresection/293), [categories](https://rulebooks.vara.ae/rulebook/c-va-issuance-categories-and-prior-requirements) | Current version effective 2025-06-19 | Parts I–III: categories/licensed distribution and whitepaper/risk disclosure. Category 2 is not VARA approval; exemptions depend on actual characteristics. |
| UAE-03 · DFSA | [Crypto Token framework](https://www.dfsa.ae/crypto), [FAQ announcement](https://www.dfsa.ae/news/dfsa-publishes-crypto-token-faqs-support-implementation-updated-regulatory-framework) | Rules effective 2026-01-12; announcement 2026-02-12 | In/from DIFC financial services; firms' documented suitability assessment replaces prescribed Recognised Crypto Tokens list. |
| UAE-04 · UAE legislation | [Cabinet Resolution 111 of 2022](https://uaelegislation.gov.ae/en/legislations/1623) | Dated 2022-12-12; legislation locator; direct page/download access restricted | Historical federal VA framework; obtain full authoritative amended text/current transition before detailed reliance. |
| UAE-05 · CMA | [Virtual Assets Framework announcement](https://www.uaecma.gov.ae/en/100-preview-c-001/media-center/news/13/4/2026/%D9%87%D9%8A%D8%A6%D8%A9-%D8%B3%D9%88%D9%82-%D8%A7%D9%84%D9%85%D8%A7%D9%84-%D8%AA%D8%B5%D8%AF%D8%B1-%D8%A5%D8%B7%D8%A7%D8%B1-%D8%AA%D9%86%D8%B8%D9%8A%D9%85-%D8%A7%D9%84%D8%A3%D8%B5%D9%88%D9%84-%D8%A7%D9%84%D8%A7%D9%81%D8%AA%D8%B1%D8%A7%D8%B6%D9%8A%D8%A9-%D9%85%D8%A4%D8%B3%D9%91%D9%90%D8%B3%D8%A9%D9%8B-%D9%86%D8%B8%D8%A7%D9%85%D8%A7%D9%8B-%D9%85%D8%AA%D9%83%D8%A7%D9%85%D9%84%D8%A7%D9%8B-%D9%8A%D8%AA%D9%83%D9%88%D9%91%D9%86-%D9%85%D9%86-%D8%AE%D9%85%D8%B3-%D9%88%D8%AD%D8%AF%D8%A7%D8%AA) | 2026-04-13; **announcement**, not full operative rules | Five modules: general, conduct, alternative trading systems, AML/CFT, prudential; eight activities. No inferred permission, exemption or commencement/transition. |
| EU-01 · EU / ESMA | [MiCA Regulation (EU) 2023/1114](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32023R1114), [Article 4](https://www.esma.europa.eu/publications-and-data/interactive-single-rulebook/mica/article-4-offers-public-crypto-assets-other) | Adopted 2023-05-31; general application 2024-12-30; regulation | Public offer conditions and operational versus planned utility. EUR-Lex direct rendering had access/verification limits; relevant provisions cross-checked with ESMA. |
| EU-02 · ESMA MiCA rulebook | [Article 6](https://www.esma.europa.eu/publications-and-data/interactive-single-rulebook/mica/article-6-content-and-form-crypto-asset), [Article 7](https://www.esma.europa.eu/publications-and-data/interactive-single-rulebook/mica/article-7-marketing-communications) | Current official reproduction of regulation | Required whitepaper risks/no future-value assertions; identifiable clear marketing, consistency, contact/responsibility statements and publication timing. |
| EU-03 · ESMA | [Classification guidelines](https://www.esma.europa.eu/document/guidelines-conditions-and-criteria-qualification-crypto-assets-financial-instruments), [PDF](https://www.esma.europa.eu/sites/default/files/2025-03/ESMA75453128700-1323_Guidelines_on_the_conditions_and_criteria_for_the_qualification_of_CAs_as_FIs.pdf) | 2025-03-19; ESMA75453128700-1323; guidelines | Actual rights, substance, technology neutrality and hybrid features; illustrative utility examples do not replace assessment. |
| EU-04 · ESMA | [End-of-transition statement](https://www.esma.europa.eu/sites/default/files/2026-04/ESMA75-113276571-1679_Statement_on_the_end_of_transitional_periods_under_MiCA.pdf) | 2026-04-17; supervisory statement | EU service-provider transition expired 2026-07-01; continuing services require applicable authorization. |
| FATF-01 · FATF | [Recommendations](https://www.fatf-gafi.org/en/publications/Fatfrecommendations/Fatf-recommendations.html) | Current standards page accessed on review date | R.15/VA/VASP locally implemented preventive measures; standards are not project authorization. |
| FATF-02 · FATF | [VA/VASP risk-based guidance](https://www.fatf-gafi.org/en/publications/Fatfrecommendations/Guidance-rba-virtual-assets-2021.html) | 2021-10-28; guidance | Activity mapping/licensing/Travel Rule. Page warns later revisions, including 2025 R.1 changes, are not included in older guidance. |
| FATF-03 · FATF | [Seventh targeted update](https://www.fatf-gafi.org/en/news/targeted-updated-va-vasps-2026.html), [report](https://www.fatf-gafi.org/content/dam/fatf-gafi/reports/7th-targeted-update-on-implementation-fatf-standards-vas-vasps-2026.pdf.coredownload.pdf) | 2026-07-16; latest implementation/risk report located | Current R.15/Travel Rule context; 2025 is not the latest update. National law determines obligations. |

Only official primary sources support the findings. A secondary article was used solely to locate the September SEC FAQs, then read on SEC.gov. This dated snapshot does not replace current operative/local-law and factual verification by qualified counsel.

## Current Architecture and AML Fact Map

| Question | Frontend evidence | Remaining uncertainty |
| --- | --- | --- |
| Who sells / operates? | Official sale address is configured; owner-only admin requests exist. | Owner identifies Zar Commerce FZE as a supporting team entity, with formation data above. Legal issuer/seller/operator designation, current company status, controller residence and beneficial owners remain unverified; neither an address nor a supporting-company label proves these roles. |
| What does buyer sign? | `BuyZaraiModal` computes `(amountWei * tokenPrice) / PRICE_DENOMINATOR`; if needed calls USDT `approve(sale, requiredUsdt)`, waits for receipt, then a separately requested `buyTokens(amountWei)`. | Deployed source and live state must be checked. Sufficient existing allowance skips another approval; any requested approval is for the exact calculated requiredUsdt amount. No automatic purchase or unlimited approval is requested by this flow. |
| USDT destination? | Approval authorizes sale spending; purchase targets sale. ABI has `paymentToken` and `treasury` getters. | **Not proved:** buyer-to-treasury directly, buyer-to-sale first, or other routing/custody. Obtain deployed code, transfer receipts and controller map. Getter/comment alone is insufficient evidence. |
| Custody/signing? | No server wallet, private-key signer or custom custody endpoint found; user wallet signs. | Contract/controller custody, treasury control and off-site intermediaries remain business/legal facts. This does not settle MSB/VASP obligations. |
| Owner powers? | `owner`, `setSaleEnabled`, `setTokenPrice`, `withdrawUnsoldTokens(to, amount)` in ABI/callers; withdrawal destination is treasury getter/fallback. | Verify deployed powers, source, access controls, ownership transfer, upgradeability and custody arrangements independently. Client checks are not contract security proof. |
| Treasury? | Repository fallback `0x40a44BCd809d8cfB9449BF7d2f7D249517ddFe09`. | Who controls it, actual live value and whether it receives USDT not verified. Do not publish fallback as proved payment destination. |
| Redemption / fiat / exchange? | No implemented gold/travel/cash redemption, fiat conversion, secondary trading, exchange/order matching or onward-payment flow found in application code. | External business arrangements, prior promises, refunds and third-party services unknown. No guaranteed liquidity or listing. |
| KYC / geography / sanctions? | No identity onboarding, geoblocking, sanctions checks, AML casework or screening middleware found. | Whether controls are legally required and whether external controls exist needs owner/counsel evidence. No prohibited-country list invented. |
| Monitoring? | `useSaleEvents`: up to 50,000-block lookback, maximum 100 purchase events, 60-second refresh and local CSV export. | This operational event display is not a demonstrated AML transaction-monitoring programme. |
| Privacy / services? | CSS loads Google Fonts; browser calls BNB RPC; MetaMask integration and wallet address/balance reads exist. | Hosting/IP logs, browser storage, SDK telemetry, processors, lawful basis/consent, retention and transfers need a real data inventory. Absence of custom analytics does not mean absence of third-party telemetry. |

**Historical dependency/privacy inspection, recorded 2026-10-02:** installed-dependency inspection added these data-flow facts (code evidence, not captured traffic): wagmi defaults to `localStorage` with `wagmi.` prefix and persists account/connector/chain connection state. MetaMask Connect EVM 2.1.1 / Multichain 1.2.0 uses IndexedDB `mmconnect-kv-store` for identifiers, cached account/chain/session and transport state; configured services include `mm-sdk-analytics.api.cx.metamask.io`, `mm-sdk-relay.api.cx.metamask.io` and `metamask.app.link`. SDK analytics defaults enabled; the installed wagmi connector replaces its analytics object with an integration label, so a simple opt-out option is not established as effective. Desktop injected-wallet and mobile SDK paths differ. No stored user data was opened, no privacy settings were changed, and no no-analytics claim is made.

Relevant functional analysis: US-FIN-01/02, US-SEC-03, UAE-02/03/05 and FATF-01–03. No technical finding is presented as an exemption.

## Public Content Changes

The 2026-10-02 historical cleanup below is preserved with current owner decisions added. This follow-up adds the supporting team entity, initial allocation/policy, shared rights/jurisdiction wording, dedicated risk route and improved purchase information. Historical claims still require review; they are not current benefits.

| Original concept / impression | Risk identified | New treatment | Affected files |
| --- | --- | --- | --- |
| Temporary gold-airplane brand; old share graphic | Owner brand mismatch; gold/flight visuals could reinforce old claims | Source BMP artwork preserved in proportional official PNGs; obsolete favicon removed; official share asset | `Logo.tsx`, `style.css`, `layout.tsx`, page metadata, `public/assets/*`, `public/og.png` |
| One gram gold / physical backing / gold-equivalent redemption / inflation protection | Unsupported rights, stability and classification impression | No public gold mechanism claim; specific ideas retained only as questions below | `whitepaper/page.tsx`, `TokenUtility.tsx`, `Roadmap.tsx`, subtitle hook |
| Six-month holding / 1,200 km free flight / cash-equivalent benefit | Current entitlement and delivery impression without implementation/terms | Exact figure and entitlement omitted; only clearly labelled future travel/reward concepts under separate review | Project Overview, utility and roadmap |
| Three profits, inevitable appreciation, optimal timing, capital protection at USD120, USD196m valuation, fixed USD140 token value | Unsupported investment inducement, capital/value/liquidity promise | Neutral token facts and sale mechanism; no returns, valuation or redemption-floor claims | Project Overview and homepage sections |
| Binance/exchange listing, fixed deadlines, airline licences, audits/locks, legal compliance, team/business experience and relationships | No documentary support; false endorsement/credential impression | Removed unsupported details; now add only owner-provided supporting-company/initial-allocation facts with verification limits; no invented partner, permission or schedule | Project Overview and roadmap |
| Inconsistent allocations (40/25/15/10/10 vs 40/20/20/10/10) | Contradictory tokenomics with no current evidence | Replace earlier breakdowns with owner-approved initial 40% Sale Contract / 60% project-owner allocation (560,000 / 840,000); separate live balances and disclose no on-chain lock | `Tokenomics.tsx`, Project Overview |
| Future gold/flight rewards mixed with current features | Overall impression of purchased benefits | Current wallet/purchase functionality separate; generic future evaluation, no current entitlement or dates | Features, utility, roadmap, subtitle and Project Overview |
| Live token price / Buy Now / admin140 placeholder | Market-value confusion and unnecessary urgency | Current sale contract price; Purchase ZARAI; Enter new price. Wallet calculation/calls unchanged | Tokenomics, `BuyZaraiModal.tsx`, `AdminSaleControls.tsx`, footer |
| Learn to purchase safely; tutorial without nearby loss/jurisdiction information | Suggestion of safety and incomplete risk context | Neutral walkthrough heading; concise loss/availability/risk links at hero, guide, wallet and footer | Hero, how-to-buy, modal, footer |
| Guide omits BNB fees and universally prescribes phrase-only recovery | Incomplete funding steps; current MetaMask setup alternatives | Add BNB gas prerequisite; qualify phrase setup. Checked [MetaMask's official wallet setup guidance](https://support.metamask.io/start/creating-a-new-wallet) (accessed 2026-10-02) | `how-to-buy/page.tsx` |
| Earlier tutorial shows obsolete brand, Low-Cost Flights, historical price/inventory and an Unlimited cap screen | Contradicts current factual copy and exact-amount approval flow | Remove public embed and archive original unchanged outside `public`; written guide is current. Replacement video is optional and would require fresh claim/signing review | `how-to-buy/page.tsx`, `docs/media/zarair-how-to-buy.mp4` |
| Formal-looking whitepaper without verified business/legal information | Could imply a completed offering document | Fourteen-section Zar Air Project Overview at existing `/whitepaper`; no MiCA-compliance claim | `whitepaper/page.tsx` |
| Production metadata based on incoming host/old brand | Wrong canonical/share identity | Production canonical base, official imagery, admin noindex/nofollow; robots/sitemap retained | Layout/page metadata, robots, sitemap |

Historical promotional materials require counsel review, preservation and any necessary corrective communication; silently rewriting the current page does not erase prior representations (US-SEC-01, UK-03, EU-01).

### Website / Overview Consistency Review

Current source facts: the overview has fourteen numbered sections; the home includes supporting-team and initial-allocation content; shared components/statements maintain rights, policy and future-feature wording. Current live-price/inventory components distinguish Sale Contract price and Sale Contract token balance from market value and initial allocation.

The dedicated risk route covers seven core topics (volatility/liquidity; rights/regulation; future functionality; jurisdiction; blockchain/wallet; Sale Contract price; information/advice), with an additional owner-allocation section. The existing overview risk anchor links to it. Source inspection confirms current hero/guide/modal/footer links, guide FAQ/address checklist and modal acknowledgment. Current local route/layout QA is recorded below; wallet transaction execution was not performed.

Acknowledgment is a local UI gate, not a signature, KYC check, waiver or authorization. Wallet connection cannot purchase. Anti-phishing guidance must identify the official site, chain ID 56 and token/sale/payment addresses; support never requests a seed phrase/private key. FAQ must explain allowance-based approval, fees, current price/inventory, 40/60 initial allocation, unlocked owner policy, rights and future-feature limits without adding promises.

No current gold backing/redemption, guaranteed return, protected capital, airline entitlement, listing date or automatic jurisdiction permission is supported. Current admin security copy links to token/sale source checks and explains that source verification or Token Info does not guarantee wallet warnings disappear; it does not assume the contracts are verified.

## Terms, Privacy and Missing Facts

| Document / evidence | Status |
| --- | --- |
| Terms of Use / Token Sale Terms | No owner-approved binding documents evidenced. Establish issuer/seller/operator, eligibility, governing law, price/execution, rights, refund/cancellation, disputes and mandatory disclosures before drafting/publishing; no legal terms invented. |
| Privacy / cookie/storage information | No owner-approved completed policy/data inventory evidenced. Evaluate actual SDK/RPC/fonts/hosting/storage/email flows and applicable law before publishing; no blanket banner or no-analytics conclusion. |
| Risk Disclosure | Current dedicated /risk-disclosure route with seven core topics plus owner-allocation disclosure; overview risk anchor retained. Counsel must determine prescribed wording/prominence and route requirements. |
| Company / credentials | Owner-provided supporting-company formation details are now supplied; certificate asset and independent registry/current-status check unavailable. Issuer/seller/operator, beneficial ownership, licences/auditor/counsel and partnerships remain to be evidenced. |
| Use of proceeds | No management-approved sale-proceeds allocations evidenced. Omit a use-of-proceeds table/economic commitments unless management confirms facts and applicable disclosure needs. |
| Initial allocation / policy | 40/60 initial allocation is owner-approved. Current balances/transfers/policy observance unverified; technical transfers remain possible and no on-chain lock/vesting is claimed. |
| Airline / reward implementation | Future concept only; no operating flights, current redemption entitlement, provider contracts or licence is established. |
| Social profiles | No verified official social profiles supplied; do not invent X/Telegram/Discord. BscScan/BNB/MetaMask links are resources, not endorsements. |
| Video | The obsolete original is archived at `docs/media/zarair-how-to-buy.mp4` and no longer publicly served or embedded. 38 visual samples at approximately two-second intervals identified old brand/flight and historical sale claims plus an Unlimited spending-cap screen; audio is not transcribed. A new tutorial is optional, not required for the current written guide. |

**Payment-reference evidence, accessed 2026-10-04:** [Binance's own wallet documentation](https://github.com/binance/binance-skills-hub/blob/main/skills/binance-web3/binance-agentic-wallet/references/wallet-view.md) uses configured 0x55d398326f99059fF775485246999027B3197955 as USDT on chain 56. An indexed official [BNB Chain asset reference](https://explorer.bnbchain.org/asset/USDT-6D8) identifies the matching BSC contract; direct page retrieval timed out. These reference matches do not verify the live Sale Contract paymentToken getter, decimals, transfer behaviour or native-Tether issuance.

[Tether's supported-protocols page](https://tether.to/en/supported-protocols/) currently lists XAUt in its BNB section and does not identify this configured address as native Tether USDt. Do not use it as payment-address, backing or redemption verification. BscScan indexed token information may describe Binance-Peg BSC-USD, but direct current web access was 403; no newly verified source/state claim follows.

## Comparative Project Research

Reviewed [Ethereum's introduction documentation](https://ethereum.org/developers/docs/intro-to-ethereum/) and [Uniswap's technical concepts documentation](https://developers.uniswap.org/docs/get-started/concepts/how-uniswap-works) on 2026-10-02. Adopted only presentation patterns: start with a neutral definition, distinguish components and current mechanisms, link primary records, separate proposed development. No wording, economics, claims, branding or legal disclaimer was copied. Established projects' documentation is not evidence that Zar Air's sale is lawful.

## Open Legal Questions and Project Triage

Priorities organize work; **they are not legal classifications or findings of illegality**. Improved copy does not supply legal clearance.

| Priority | Owner/counsel question / evidence needed |
| --- | --- |
| CRITICAL | Identify legal issuer/seller/operator and controllers; verify company current status and designated roles separately from the supporting-team disclosure. |
| CRITICAL | Confirm intended/served countries/audiences, languages, ads, influencers, referral incentives and historical purchasers; identify lawful offer/promotion/service routes and permissions. |
| CRITICAL | Resolve current purchase CTA/guide/integrated-sale marketing nexus, especially UK-consumer/UAE-directed reach; generic warnings/checkbox do not authorize a promotion. |
| HIGH | Classify actual token rights/transaction arrangements and review historical gold, profit, capital-protection and issuer-effort communications; preserve history and determine corrective disclosure needs. |
| HIGH | Verify deployed source/bytecode, no-mint/supply mechanics, owners/admin/upgrade powers, treasury/payment routing and configured payment-token identity with successful read-only evidence. |
| HIGH | Verify original 560,000/840,000 allocation transfers/current holdings and circulating supply; distinguish initial allocation from live inventory, and policy from absent technical lock. |
| HIGH | Determine MSB/VASP/intermediary/payment-service scope and actual AML/KYC/sanctions/monitoring/reporting/Travel Rule programmes; obtain operative UAE/federal and relevant local-law analysis. |
| HIGH | Obtain Terms/Sale Terms, privacy/data disclosures, mandatory risks and management-approved offer facts, including use of proceeds if applicable; do not invent legal/business facts. |
| HIGH | Evidence future airline/reward feasibility, providers, licences, eligibility/redemption and consumer obligations; no current entitlement or promised launch date. |
| HIGH | Complete any later authorized wallet/device acceptance review. Final rebuild and RPC-error rendering checks passed; wallet signing was not exercised. Any replacement tutorial needs fresh claim/audio/signing review. |
| HIGH | Before manual BscScan submission, confirm actual source publication, account ownership verification and public links against official guidance below. Contract-page access was blocked; source/ownership status and acceptance remain unverified. |
| MEDIUM | Complete any later authorized wallet preview QA; acknowledgment source guards, actual RPC-error displays and route/layout/canonical/asset checks are recorded below. |
| MEDIUM | Deploy this follow-up only through the separately authorized release process, then confirm the new owner/rights/allocation content and /risk-disclosure. The October 4 production baseline lacks these additions; local build success does not establish published delivery. |

## Validation and Remaining Publication Steps

**Final local validation — 2026-10-04:** `npm run lint`, `node node_modules/typescript/bin/tsc --noEmit --incremental false`, `npm run build` and `git diff --check` passed, including a rebuild after the video archive. Homepage, guide, Project Overview and Risk Disclosure returned 200 at widths 1440, 768, 390 and 320 with no horizontal overflow and valid production canonical metadata. Desktop/mobile screenshots were visually reviewed. Admin passed at 390 and above; existing control cards overflow at 320 (375px content width), an unrelated layout issue left unchanged. Admin retains noindex metadata. No uncaught browser page errors were observed.

Final guide checks confirm that the video element is absent; both `/videos/zarair-how-to-buy.mp4` and `/docs/media/zarair-how-to-buy.mp4` return 404. Archived bytes match `HEAD:public/videos/zarair-how-to-buy.mp4` exactly. The guide remains within all four tested widths after removing the video. Both logos, share image, robots and sitemap return 200 locally; sitemap includes `/risk-disclosure`. Rendered overview/risk pages contain the exact owner-approved rights/jurisdiction wording. The guide contains all three official addresses, Step 5 and the FAQ.

Acknowledgment source inspection confirms that the checkbox handler only updates React state, both approve/purchase handlers guard `riskAcknowledged`, and the action button is disabled without it. Opening the modal resets acknowledgment. No wallet was connected, no wallet request was made and no transaction was signed or executed. These are source/configuration checks; a real signed purchase is outside this task.

Actual RPC failures render two `Temporarily unavailable` messages with BscScan verification links for homepage price/inventory, without numerical fallback. Fresh Node and browser read-only probes for supply, inventory, payment token, price/denominator and USDT metadata failed; current chain values remain unverified. Source remains `tokenPrice()` / `PRICE_DENOMINATOR()` for calculations and `ZARAI.balanceOf(SALE_CONTRACT)` for inventory. No mint-capability assurance beyond the owner-supplied fixed-supply fact was added.

Current asset checks found the BMP, logo and OG bytes identical to HEAD, with the BscScan PNG exactly 64 × 64. Public deployment overrides match the owner token/sale/payment contracts and chain 56; no secret assignment was detected and no secret values were logged. Approval calls remain exact `requiredUsdt` requests; sufficient allowance skips approval. Current readers were unchanged. This verifies frontend configuration/request code, not deployed contract internals or a signed purchase.

**Video disposition — 2026-10-04:** the 74.0665-second, 1908 × 810 file was sampled in 38 frames at approximately two-second intervals. Samples show the old “ZARAIR Token” branding, “Low-Cost Flights,” historical 140/inventory values and an Unlimited spending cap at about 30.1 seconds before 1.4 at about 32.1 seconds. An audio track exists but was not transcribed. The embed was removed; the original was moved byte-for-byte from `public/videos` to `docs/media/zarair-how-to-buy.mp4` and is no longer publicly served. An approved replacement can be considered later; it is not required for the current written guide.

**Current read-only production comparison — 2026-10-04:** homepage and /whitepaper returned 200 and show the previously cleaned factual baseline, official `info@zarair.com` and official logo, without the old gold/1,200 km concepts. This follow-up's owner team, initial-allocation/rights additions and dedicated /risk-disclosure are not deployed; the new risk route returned 404. `/assets/zarair-logo-64.png`, `/robots.txt` and `/sitemap.xml` returned 200. Production reachability is established for the baseline/asset, not for the new follow-up content.

**Historical production comparison — 2026-10-02:** homepage and /whitepaper then contained older gold/1,200 km concepts; the official email/new risk anchor were absent and the logo, robots and sitemap returned 404. The October 4 observation supersedes these as current blockers. Earlier ten-section/four-route QA remains historical; current checks above apply to this follow-up.

Remaining technical evidence: successful deployed-source/live-state probes and any later authorized real-wallet/device acceptance checks. The earlier amount/price parsing concern for inputs beyond 18 decimals is unchanged. No new test files, fixtures, mocks, dependencies, migrations or environment changes were introduced. No commit, push, merge, deployment, contract edit or blockchain transaction was performed.

### BscScan preparation

Accessed **2026-10-04**: [BscScan Token Info Submission Guidelines](https://info.bscscan.com/how-to-update-token-info/) (page updated 2025-04-21) and [address ownership explanation](https://info.bscscan.com/what-is-verify-address-ownership/). The published process requires source publication and account ownership verification before submission through the official form. It requests reachable project links, an official contact, a neutral description and an accessible logo; the preserved 64 x 64 PNG matches its PNG guidance. Updates are reviewed for explorer publication, separately from licences, offering permissions and legal classification.

Prepared neutral description: **Zar Air (ZARAI) is a fixed-supply BEP-20 token on BNB Smart Chain supporting the development of the Zar Air project. Current functionality includes a wallet-based USDT purchase flow through a separate Sale Contract. Future digital, loyalty and travel-related utility is under evaluation.**

No form, message signature or submission was sent. The stable logo is reachable in production, but this follow-up's risk route and team/allocation/rights disclosures are not published. Actual source/account ownership verification could not be independently confirmed. These are submission-preparation blockers; explorer acceptance is not promised.

### Final changed-file inventory

All changes are unstaged and uncommitted on `fix/bscscan-token-info`. The checkout was initially clean; the existing local branch was resumed and `origin` fetched without creating a branch. The media move appears as a deleted old path plus an untracked archive until the user stages it.

| Git status | File |
| --- | --- |
| M | docs/compliance-content-review.md |
| M | public/sitemap.xml |
| D (archived below) | public/videos/zarair-how-to-buy.mp4 |
| M | src/app/how-to-buy/page.tsx |
| M | src/app/layout.tsx |
| M | src/app/page.tsx |
| M | src/app/style.css |
| M | src/app/whitepaper/page.tsx |
| M | src/components/BuyZaraiModal.tsx |
| M | src/components/LiveSaleInventory.tsx |
| M | src/components/LiveTokenPrice.tsx |
| M | src/components/Roadmap.tsx |
| M | src/components/admin/AdminSecurityNotice.tsx |
| M | src/components/sections/Features.tsx |
| M | src/components/sections/Footer.tsx |
| M | src/components/sections/Hero.tsx |
| M | src/components/sections/TokenUtility.tsx |
| M | src/components/sections/Tokenomics.tsx |
| ?? (preserved original) | docs/media/zarair-how-to-buy.mp4 |
| ?? | src/app/risk-disclosure/page.tsx |
| ?? | src/components/ProjectAllocation.tsx |
| ?? | src/components/ProjectTeam.tsx |
| ?? | src/lib/project-content.ts |

Suggested manual commit message: `feat(content): add owner-approved policies and risk disclosure`.

**PRODUCTION READINESS: BLOCKED** — local validation passes; publication, successful contract/state verification and outstanding issuer/market-access/legal/privacy decisions remain. Certificate asset missing: no link invented. Obsolete video archived: replacement optional. No proceeds policy published without management confirmation.

**BSCScan TOKEN INFO READINESS: BLOCKED** — confirm source/account ownership status and publish/check this follow-up's public document links before manual submission. BscScan publication is not legal or regulatory approval.

Frontend/document preparation remains subject to technical verification, business evidence and jurisdiction-specific advice. It is not production readiness, lawful sale availability or BscScan acceptance.
