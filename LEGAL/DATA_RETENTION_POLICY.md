# DATA RETENTION POLICY

**ForroVivo - Brazilian Portuguese Learning Platform**

**Effective Date:** December 1, 2025  
**Last Updated:** October 25, 2025  
**Version:** 1.0  
**GDPR Compliant:** Article 5(1)(e) - Storage Limitation Principle

---

## 1. POLICY OVERVIEW

### 1.1 Purpose

This Data Retention Policy explains **how long we keep your data** and **why** we retain it. This policy is designed to comply with:

- ✅ GDPR (EU General Data Protection Regulation)
- ✅ CCPA (California Consumer Privacy Act)
- ✅ LGPD (Brazilian General Data Protection Law)
- ✅ Industry best practices

**Core Principle:**
> "We only keep your data as long as necessary for the purposes we collected it, and no longer."

### 1.2 Legal Basis

**GDPR Article 5(1)(e) - Storage Limitation:**
> "Personal data shall be kept in a form which permits identification of data subjects for no longer than is necessary for the purposes for which the personal data are processed."

**We Balance:**
- Your right to privacy and deletion (GDPR Article 17)
- Our legitimate business needs
- Legal and regulatory requirements
- Security and fraud prevention

### 1.3 Scope

**This Policy Applies To:**
- All personal data collected by ForroVivo
- All users (free and premium)
- All data storage systems (production and backups)
- All third-party processors (Supabase, OpenAI, etc.)

---

## 2. DATA RETENTION PERIODS

### 2.1 Account and Profile Data

**Data Type:** Email, Name, Password, Profile Picture, Preferences

| Account Status | Retention Period | Reason |
|---------------|------------------|--------|
| **Active Account** | Indefinitely (while account is active) | Required to provide service |
| **Inactive (1-2 years)** | Retained with reminder emails | User may return |
| **Inactive (2-3 years)** | Retained with deletion warning | Last chance to return |
| **Inactive (3+ years)** | Non-essential data deleted, core profile retained | May log in again |
| **User-Deleted** | 30 days (recovery period), then permanent deletion | GDPR Right to Erasure |
| **Admin-Deleted (Terms violation)** | 90 days (appeal period), then permanent deletion | Prevent abuse |

**Retention Logic:**
- We want you to be able to return without losing your progress
- But we respect your privacy and delete inactive accounts' non-essential data
- Deleted accounts have 30-day recovery window

**What Happens at 3 Years of Inactivity:**
- Email sent: "Your account will be deleted in 30 days unless you log in"
- Non-essential data deleted: Analytics, session history, chat transcripts
- Core profile retained: Email, name, learning progress (in case you return)
- After 5 years: Complete deletion (except legal retention items)

### 2.2 Learning Progress Data

**Data Type:** Lessons completed, XP, Achievements, Streaks, Exercise answers

| Data Category | Retention Period | Reason |
|--------------|------------------|--------|
| **Lesson Progress** | Lifetime (even if inactive) | Core value proposition - preserve achievements |
| **XP and Levels** | Lifetime | Core gamification |
| **Achievements** | Lifetime | User earned them |
| **Streaks** | Lifetime | Historical record |
| **Exercise Answers** | 2 years | Learning analytics, then anonymized |
| **Quiz Results** | 2 years | Performance tracking, then anonymized |
| **Study Time** | 2 years | Analytics, then aggregated |

**Why Lifetime?**
- Your achievements are the core value of ForroVivo
- We want you to see your progress even if you return after years
- Example: Duolingo users appreciate seeing their old streaks

**Exception:**
- If you explicitly delete your account, ALL data deleted within 30 days
- No lifetime retention upon user-requested deletion

### 2.3 AI Conversation Data

**Data Type:** Chat transcripts with AI tutor, voice recordings

| Data Category | Retention Period | Reason | Notes |
|--------------|------------------|--------|-------|
| **Conversation Transcripts** | 90 days | Learning review, error correction | Then anonymized |
| **Voice Recordings** | 30 days | Quality assurance | Then deleted |
| **Anonymized Conversations** | 2 years | Improve AI lessons | Cannot identify you |
| **Reported Conversations** | 1 year | Safety and abuse prevention | For moderation |

**OpenAI Retention (Third Party):**
- OpenAI retains data for 30 days (per their policy)
- After 30 days: OpenAI deletes your conversations
- **OpenAI does NOT use your data to train models** (per their Enterprise agreement)

**Why 90 Days?**
- Allows you to review past conversations for learning
- Helps us improve lesson quality
- After 90 days: Anonymized (removed name, email, identifiers)

### 2.4 Payment and Billing Data

**Data Type:** Purchase history, invoices, subscription status

| Data Category | Retention Period | Reason | Legal Basis |
|--------------|------------------|--------|-------------|
| **Transaction Records** | 7 years | Tax law compliance (IRS, HMRC, etc.) | Legal obligation |
| **Invoices** | 7 years | Accounting regulations | Legal obligation |
| **Subscription Status** | Active + 1 year after cancellation | Support, refunds | Legitimate interest |
| **Payment Method Details** | Stored by RevenueCat (not us) | N/A | Third-party |
| **Refund Requests** | 3 years | Dispute resolution | Legal obligation |
| **Fraud Flags** | 6 years | Prevent fraud | Legitimate interest |

**Legal Requirements:**
- **USA (IRS):** 7 years for tax records
- **UK (HMRC):** 6 years for VAT records
- **EU:** Varies by country (typically 7-10 years)
- **Brazil:** 5 years for tax records

**We Keep:**
- Transaction ID, amount, date, subscription type
- Invoice details (name, email, billing address)
- Payment success/failure status

**We Do NOT Keep:**
- Credit card numbers (RevenueCat stores this)
- CVV codes (never collected)
- Full bank account details

### 2.5 Analytics and Usage Data

**Data Type:** App usage, feature adoption, session duration

| Data Category | Retention Period | Reason | Anonymization |
|--------------|------------------|--------|---------------|
| **Identified Analytics** | 2 years | Understand user behavior | Then anonymized |
| **Session Data** | 1 year | Performance optimization | Then aggregated |
| **Feature Usage** | 2 years | Product decisions | Then anonymized |
| **Anonymous Analytics** | 5 years | Long-term trends | Already anonymous |
| **A/B Test Results** | 1 year after test ends | Product decisions | Then deleted |

**Anonymization Process:**
- Remove: Name, email, user ID, device ID
- Keep: Country, language, app version (aggregated)
- Result: Cannot re-identify you

**Why 2 Years?**
- Industry standard for product analytics
- Understand long-term trends
- Compare year-over-year growth

**Your Control:**
- You can opt-out of analytics anytime (Settings → Privacy)
- Opt-out = we stop collecting (existing data retained per schedule)
- Delete account = all analytics data deleted within 30 days

### 2.6 Customer Support Data

**Data Type:** Support tickets, emails, chat transcripts

| Data Category | Retention Period | Reason |
|--------------|------------------|--------|
| **Support Tickets** | 3 years | Reference for recurring issues |
| **Email Correspondence** | 3 years | Legal protection, dispute resolution |
| **Chat Transcripts** | 1 year | Quality assurance |
| **Feedback Surveys** | 2 years | Product improvement |
| **Bug Reports** | 1 year after bug fixed | Engineering reference |

**Why 3 Years?**
- You may contact us again with similar issue
- Legal protection (statute of limitations typically 3-6 years)
- Dispute resolution

**Anonymization:**
- After retention period: Names and emails removed
- Preserved as anonymous case studies for training

### 2.7 Security and Fraud Data

**Data Type:** Login attempts, IP addresses, device fingerprints, abuse reports

| Data Category | Retention Period | Reason |
|--------------|------------------|--------|
| **Login Logs** | 90 days | Security monitoring, breach detection |
| **Failed Login Attempts** | 30 days | Brute force detection |
| **IP Addresses** | 90 days | Fraud prevention, GDPR allows |
| **Device Fingerprints** | 90 days | Multi-account fraud detection |
| **Abuse Reports** | 3 years | Pattern detection, evidence |
| **Suspended Account Data** | 2 years | Prevent re-registration |
| **Fraud Investigation Records** | 6 years | Legal requirement |

**Legal Basis:**
- GDPR Article 6(1)(f) - Legitimate Interest (fraud prevention)
- GDPR Recital 49 - Fraud detection overrides right to erasure

**Why We Keep This:**
- Prevent banned users from creating new accounts
- Detect coordinated fraud (multiple accounts)
- Evidence for law enforcement if needed

**IP Address Justification:**
- GDPR considers IP addresses "personal data"
- We have legitimate interest in fraud prevention
- 90 days is reasonable and proportionate

### 2.8 Marketing and Communications Data

**Data Type:** Email open rates, notification preferences, unsubscribe status

| Data Category | Retention Period | Reason |
|--------------|------------------|--------|
| **Email Marketing Consent** | Until withdrawn | Required to send marketing emails |
| **Email Open/Click Data** | 2 years | Campaign effectiveness |
| **Unsubscribe Status** | Indefinitely | Must not re-subscribe you (legal requirement) |
| **Notification Preferences** | Active account + 1 year | Respect user preferences |
| **Newsletter Subscribers (non-users)** | Until unsubscribe | Marketing purposes |

**GDPR Requirement:**
- If you unsubscribe, we MUST keep record to avoid re-adding you
- This is an exception to the "right to erasure"
- Only email address and "unsubscribed" status retained

### 2.9 Legal and Compliance Data

**Data Type:** GDPR requests, legal holds, court orders

| Data Category | Retention Period | Reason |
|--------------|------------------|--------|
| **GDPR Access Requests** | 3 years | Prove compliance |
| **GDPR Deletion Requests** | 3 years | Prove compliance |
| **Legal Hold Data** | Until hold lifted + 1 year | Legal requirement |
| **Subpoena Responses** | 7 years | Legal requirement |
| **Data Breach Records** | 7 years | Regulatory requirement |
| **Consent Records** | 3 years after consent withdrawn | GDPR Article 7(1) |

**Why So Long?**
- Prove GDPR compliance to regulators
- Defend against lawsuits (statute of limitations)
- Required by law in many jurisdictions

---

## 3. DATA DELETION PROCEDURES

### 3.1 Automated Deletion

**We Automatically Delete:**

**Every Night (Cron Job):**
- Voice recordings older than 30 days
- Failed login attempts older than 30 days
- Expired password reset tokens

**Every Week:**
- AI conversation transcripts older than 90 days (anonymize)
- Session data older than 1 year (aggregate)

**Every Month:**
- Deleted accounts older than 30 days (permanent deletion)
- Analytics data older than 2 years (anonymize)
- Support tickets older than 3 years (anonymize)

**Every Quarter:**
- Audit data retention compliance
- Review and delete overdue data
- Update retention logs

**Process:**
```sql
-- Example: Delete old voice recordings
DELETE FROM voice_recordings 
WHERE created_at < NOW() - INTERVAL '30 days';

-- Example: Anonymize old conversations
UPDATE conversations 
SET user_id = NULL, user_email = NULL, anonymized = true
WHERE created_at < NOW() - INTERVAL '90 days';
```

**Backup Purging:**
- Deleted data purged from backups within 90 days
- Encrypted backup snapshots retained for 90 days (disaster recovery)
- After 90 days: Backups rotated and deleted

### 3.2 User-Initiated Deletion

**When You Delete Your Account:**

**Within 24 Hours:**
- ✅ Account access disabled immediately
- ✅ Profile removed from public view
- ✅ Active sessions terminated

**Within 7 Days:**
- ✅ Learning progress data marked for deletion
- ✅ Conversation transcripts deleted
- ✅ Analytics data disconnected from your identity
- ✅ Third-party services notified (OpenAI, RevenueCat)

**Within 30 Days:**
- ✅ All personal data permanently deleted from production database
- ✅ Search indexes cleared
- ✅ Cache cleared

**Within 90 Days:**
- ✅ Backups purged (last step)
- ✅ Deletion confirmation email sent

**Retained (Legal Obligation):**
- Transaction records (7 years - tax law)
- Fraud investigation records (6 years - if applicable)
- Unsubscribe status (indefinitely - to not re-add you)

**You Can:**
- Cancel deletion within 30-day grace period
- Request deletion verification (we provide confirmation)
- Export your data before deletion

### 3.3 Anonymization vs. Deletion

**Anonymization:**
- Remove all identifying information (name, email, user ID)
- Retain data for aggregate analytics
- **Result:** Data still exists but cannot identify you
- **GDPR:** Anonymized data is not "personal data"

**Deletion:**
- Permanently remove data from all systems
- Overwrite with random data (secure deletion)
- **Result:** Data no longer exists
- **GDPR:** Full compliance with "right to erasure"

**When We Use Each:**

| Data Type | Method | Reason |
|-----------|--------|--------|
| Conversation transcripts | Anonymize (after 90 days) | Improve lessons |
| Learning analytics | Anonymize (after 2 years) | Product insights |
| Voice recordings | Delete (after 30 days) | No further use |
| Payment records | Retain identified (7 years) | Legal requirement |
| Deleted account data | Delete (after 30 days) | User request |

---

## 4. THIRD-PARTY DATA RETENTION

### 4.1 Our Processors

**We Share Data With:**

**Supabase (Backend/Database):**
- Retention: Matches our retention policy
- Location: USA/EU data centers
- Control: We can delete data anytime
- Backups: 90-day retention

**OpenAI (AI Conversations):**
- Retention: 30 days, then auto-deleted by OpenAI
- Location: USA
- Control: Cannot delete before 30 days (OpenAI policy)
- Training: Does NOT use your data for model training

**RevenueCat (Payment Processing):**
- Retention: Transaction records indefinitely (merchant requirement)
- Location: USA
- Control: Limited (must retain for chargebacks/refunds)
- Compliance: PCI-DSS compliant

**Analytics Providers (if you opt-in):**
- Retention: 2 years (anonymized)
- Location: USA/EU
- Control: We can delete anytime
- Compliance: GDPR compliant

### 4.2 Data Processing Agreements (DPAs)

**We Have DPAs With:**
- ✅ Supabase (GDPR-compliant DPA)
- ✅ OpenAI (Enterprise agreement with data controls)
- ✅ RevenueCat (DPA in place)
- ✅ Analytics providers (standard DPAs)

**DPAs Require:**
- Processors follow our retention policies
- Processors delete data upon our instruction
- Processors notify us of breaches within 72 hours
- Processors use sub-processors with equal protections

### 4.3 Your Rights with Third Parties

**You Can:**
- Request deletion from third-party processors
- We facilitate deletion requests
- Email: privacy@forrovivo.com

**Timeline:**
- We notify processors within 48 hours
- Processors delete within their retention period
- Confirmation provided within 30 days

---

## 5. LEGAL AND REGULATORY COMPLIANCE

### 5.1 GDPR Compliance (EU)

**Article 5(1)(e) - Storage Limitation:**
- ✅ We retain data only as long as necessary
- ✅ Clear retention periods defined
- ✅ Automated deletion processes

**Article 17 - Right to Erasure:**
- ✅ Users can delete accounts anytime
- ✅ Deletion completed within 30 days
- ✅ Exceptions documented (legal retention)

**Article 30 - Records of Processing:**
- ✅ This policy serves as our retention record
- ✅ Updated annually
- ✅ Available to regulators upon request

**Accountability:**
- Annual retention audit (documented)
- Data Protection Impact Assessment (DPIA) completed
- Data Protection Officer review (annually)

### 5.2 CCPA Compliance (California)

**Right to Delete:**
- ✅ California residents can request deletion
- ✅ Processed within 45 days (CCPA requirement)
- ✅ Exceptions disclosed (legal obligations)

**Retention Disclosure:**
- ✅ Retention periods disclosed in Privacy Policy
- ✅ This policy provides detailed timelines
- ✅ Updated annually

### 5.3 LGPD Compliance (Brazil)

**Article 16 - Right to Deletion:**
- ✅ Brazilian users can request deletion
- ✅ Processed within 15 days (LGPD requirement)
- ✅ Confirmation provided

**Data Retention Principles:**
- ✅ Retain only what's necessary
- ✅ Clear legal basis for retention
- ✅ Transparent disclosure

### 5.4 Tax and Accounting Laws

**US (IRS):**
- 7 years for business records
- Includes: Invoices, receipts, tax returns

**UK (HMRC):**
- 6 years for VAT records
- 7 years for corporation tax

**EU (VAT Directive):**
- 10 years in some EU countries
- Varies by member state

**Brazil (Federal Revenue Service):**
- 5 years for tax documents
- Includes: NFe (electronic invoices)

**We Retain:**
- Transaction records: 7 years (global standard)
- Covers all jurisdictions where we operate

---

## 6. DATA RETENTION GOVERNANCE

### 6.1 Roles and Responsibilities

**Data Protection Officer (DPO):**
- Oversees retention policy compliance
- Conducts annual audits
- Reviews exceptions and edge cases
- Contact: dpo@forrovivo.com

**Engineering Team:**
- Implements automated deletion scripts
- Monitors deletion job success rates
- Ensures backup purging

**Legal Team:**
- Reviews legal retention requirements
- Updates policy for law changes
- Handles legal holds and subpoenas

**Product Team:**
- Balances user experience with privacy
- Minimizes data collection
- Justifies retention needs

### 6.2 Retention Audit Process

**Annual Audit (Every January):**

1. **Review Retention Periods:**
   - Are they still appropriate?
   - Any legal changes?
   - User feedback?

2. **Test Automated Deletion:**
   - Run deletion scripts
   - Verify backups purged
   - Check third-party deletion

3. **Sample Data Review:**
   - Random sample of old data
   - Should it still exist?
   - Properly anonymized?

4. **Document Findings:**
   - Audit report created
   - Issues remediated
   - Policy updated if needed

5. **DPO Sign-Off:**
   - DPO reviews audit report
   - Signs off on compliance
   - Shared with executive team

**Quarterly Checks:**
- Deletion job success rates (should be 99%+)
- Data growth trends (are we retaining too much?)
- User deletion requests (processed on time?)

### 6.3 Exceptions and Legal Holds

**Legal Hold:**
- When: Litigation, investigation, or regulatory request
- What: Suspend deletion for specific data
- Who: Only legal team can authorize
- How Long: Until hold lifted + 1 year

**Process:**
1. Legal team identifies data to preserve
2. Automated deletion disabled for that data
3. Data flagged in database (legal_hold = true)
4. Regular review of active holds
5. Data deleted 1 year after hold lifted

**Example:**
```sql
-- Legal hold flag
UPDATE users SET legal_hold = true WHERE user_id = 'x123';

-- Deletion script skips legal holds
DELETE FROM users 
WHERE deleted_at < NOW() - INTERVAL '30 days'
AND legal_hold = false;
```

---

## 7. USER CONTROL AND TRANSPARENCY

### 7.1 How to View Your Data Retention

**In-App:**
- Settings → Privacy → Data Retention
- See what data we have
- See when it will be deleted
- Export before deletion

**Request Data Inventory:**
- Email: privacy@forrovivo.com
- We provide detailed list within 30 days
- Includes retention dates

### 7.2 How to Request Early Deletion

**You Don't Have to Wait:**
- Delete account anytime (immediate)
- Request specific data deletion (e.g., old conversations)
- Email: privacy@forrovivo.com

**What Can Be Deleted Early:**
- ✅ Conversation transcripts (anytime)
- ✅ Analytics data (anytime)
- ✅ Voice recordings (anytime)
- ✅ Profile picture (anytime)

**What Cannot Be Deleted Early:**
- ❌ Transaction records (legal requirement - must wait 7 years)
- ❌ Active fraud investigations (6 years)
- ❌ Legal hold data (until hold lifted)

### 7.3 Retention Notices

**We Will Notify You:**
- 30 days before deleting inactive account data
- When data is anonymized (if significant)
- If retention periods change (30-day notice)

**How We Notify:**
- Email to registered address
- In-app notification
- Privacy Policy update notice

---

## 8. CHANGES TO THIS POLICY

**We May Update This Policy:**
- To comply with new laws
- To reflect new features
- To clarify ambiguous language
- Based on regulator feedback

**Notice:**
- 30 days before changes take effect
- Email notification
- "Last Updated" date at top

**Significant Changes:**
- Longer retention periods (user consent required)
- New data categories
- Changes to deletion procedures

**Minor Changes:**
- Shorter retention periods (no notice needed - benefits you)
- Clarifications
- Formatting improvements

**Version History:**
- Previous versions: https://forrovivo.com/legal/retention/history

---

## 9. CONTACT US

**Data Retention Questions:**
- Email: privacy@forrovivo.com
- Subject: "Data Retention Inquiry"
- Response: Within 48 hours

**Data Protection Officer:**
- Email: dpo@forrovivo.com
- For GDPR-specific questions

**Request Data Deletion:**
- In-App: Settings → Privacy → Delete Account
- Email: privacy@forrovivo.com
- Response: Within 48 hours, deletion within 30 days

**Mailing Address:**
ForroVivo, Inc.  
[Your Business Address]  
[City, State, ZIP]  
[Country]

---

## APPENDIX: RETENTION SUMMARY TABLE

| Data Category | Active Users | Inactive Users | Deleted Accounts | Legal Minimum |
|--------------|--------------|----------------|------------------|---------------|
| **Account Info** | Indefinite | 3 years warning, 5 years deletion | 30 days | None |
| **Learning Progress** | Indefinite | Indefinite | 30 days | None |
| **Conversations** | 90 days | 90 days | Immediate | None |
| **Voice Recordings** | 30 days | 30 days | Immediate | None |
| **Payment Records** | 7 years | 7 years | 7 years | 7 years (IRS) |
| **Analytics** | 2 years | 2 years | Immediate | None |
| **Support Tickets** | 3 years | 3 years | 30 days | None |
| **Security Logs** | 90 days | 90 days | 90 days | None |

**Key:**
- **Indefinite:** Retained while account exists
- **X days/years:** Deleted after this period
- **Immediate:** Deleted within 24-48 hours

---

**END OF DATA RETENTION POLICY**

**Last Updated:** October 25, 2025  
**Version:** 1.0  
**Effective:** December 1, 2025  
**Next Review:** January 1, 2026

**GDPR Compliant:** ✅  
**CCPA Compliant:** ✅  
**LGPD Compliant:** ✅

For questions: privacy@forrovivo.com

---

**Legal Disclaimer:** This policy should be reviewed by a qualified attorney and data protection expert before implementation. Data retention requirements vary by jurisdiction, industry, and business model.

