/**
 * Document types supported by LexiAnalyse
 */
export type DocumentType = 
  | 'Contract'
  | 'Legal Document'
  | 'Business Agreement'
  | 'Invoice'
  | 'Government Form'
  | 'Other';

/**
 * Individual risk or benefit item
 */
export interface RiskItem {
  title: string;
  description: string;
}

/**
 * Individual clause information
 */
export interface ClauseItem {
  title: string;
  section: string;
  description: string;
}

/**
 * Key information extracted from document
 */
export interface KeyInformation {
  parties: string;
  dates: string;
  paymentTerms: string;
  responsibilities: string;
}

/**
 * Verdict analysis result
 */
export interface Verdict {
  score: string;
  reasoning: string;
  confidence: number;
}

/**
 * Complete analysis summary returned by Gemini
 */
export interface AnalysisSummary {
  simpleSummary: string;
  keyInformation: KeyInformation;
  clauses: ClauseItem[];
  risks: RiskItem[];
  benefits: RiskItem[];
  checkCarefully: RiskItem[];
  questions: string[];
  verdict: Verdict;
}

/**
 * Document analysis record stored in Firestore
 */
export interface DocumentAnalysis {
  userId: string;
  docName: string;
  docType: DocumentType;
  result: AnalysisSummary;
  createdAt: Date;
}
