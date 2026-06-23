import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/* ========================================
   Database Types
   ======================================== */
export interface Lead {
  id?: string;
  name: string;
  email: string;
  phone: string;
  company_name: string;
  service: string;
  budget: string;
  message: string;
  created_at?: string;
  status?: string;
}

export interface ContactRequest {
  id?: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  created_at?: string;
}

/* ========================================
   SQL Migration (run in Supabase SQL Editor)
   ========================================

-- Create leads table
CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company_name TEXT DEFAULT '',
  service TEXT NOT NULL,
  budget TEXT DEFAULT '',
  message TEXT DEFAULT '',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  status TEXT DEFAULT 'new'
);

-- Create contact_requests table
CREATE TABLE IF NOT EXISTS contact_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  subject TEXT DEFAULT '',
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;

-- Create insert policies (allow anonymous inserts from the website)
CREATE POLICY "Allow anonymous insert" ON leads FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow anonymous insert" ON contact_requests FOR INSERT WITH CHECK (true);

*/
