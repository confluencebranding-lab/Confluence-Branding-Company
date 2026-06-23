import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, service, budget, message } = body;

    /* ── Validation ── */
    if (!name || !email || !phone || !service) {
      return NextResponse.json(
        { error: 'Name, email, phone, and service are required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    const phoneRegex = /^[+]?[\d\s()-]{7,15}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number.' },
        { status: 400 }
      );
    }

    /* ── Supabase Integration ── */
    // Uncomment when Supabase is configured://

    const { createClient } = await import('@supabase/supabase-js');
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
    );

    const { error } = await supabase.from('leads').insert({
      name,
      email,
      phone,
      company_name: company || '',
      service,
      budget: budget || '',
      message: message || '',
      status: 'new',
    });

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to save your request. Please try again.' },
        { status: 500 }
      );
    }


    // For now, log the submission (remove in production)
    console.log('New lead received:', { name, email, phone, company, service, budget, message });

    return NextResponse.json(
      { success: true, message: 'Your request has been received successfully.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
