/*
# Create consultation_requests table

1. Purpose
   Stores contact-form submissions from the Shraddha Build Solutions website's
   "Free Consultation" form. Visitors submit their name, contact details, the
   service they're interested in, and a project description; the company's
   sales team reviews each request and follows up.

2. New Tables
   - `consultation_requests`
     - `id` (uuid, primary key, auto-generated)
     - `name` (text, required) — full name of the enquirer
     - `email` (text, required) — email address for follow-up
     - `phone` (text, optional) — phone number if provided
     - `service` (text, optional) — selected service category
     - `message` (text, required) — project description / enquiry
     - `status` (text, default 'new') — tracking state for the sales team
     - `created_at` (timestamptz, default now()) — submission timestamp

3. Security
   - Enable RLS on `consultation_requests`.
   - The website has no sign-in screen, so visitors interact as the `anon`
     role. We allow anon + authenticated INSERT so the public form can submit
     requests. We do NOT allow public SELECT/UPDATE/DELETE — only company
     staff (authenticated) can read and manage submissions — so visitor
     contact details are never exposed to the public.
*/

CREATE TABLE IF NOT EXISTS consultation_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  service text,
  message text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE consultation_requests ENABLE ROW LEVEL SECURITY;

-- Public can submit consultation requests via the website form.
DROP POLICY IF EXISTS "anon_insert_consultations" ON consultation_requests;
CREATE POLICY "anon_insert_consultations"
  ON consultation_requests FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Only authenticated staff can read submissions.
DROP POLICY IF EXISTS "staff_select_consultations" ON consultation_requests;
CREATE POLICY "staff_select_consultations"
  ON consultation_requests FOR SELECT
  TO authenticated
  USING (true);

-- Only authenticated staff can update (e.g. change status).
DROP POLICY IF EXISTS "staff_update_consultations" ON consultation_requests;
CREATE POLICY "staff_update_consultations"
  ON consultation_requests FOR UPDATE
  TO authenticated
  USING (true) WITH CHECK (true);

-- Only authenticated staff can delete submissions.
DROP POLICY IF EXISTS "staff_delete_consultations" ON consultation_requests;
CREATE POLICY "staff_delete_consultations"
  ON consultation_requests FOR DELETE
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_consultation_requests_created_at
  ON consultation_requests (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_consultation_requests_status
  ON consultation_requests (status);
