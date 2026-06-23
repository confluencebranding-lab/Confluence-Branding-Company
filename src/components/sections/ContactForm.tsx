'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { contactForm } from '@/lib/content';
import Button from '@/components/ui/Button';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setSubmitStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitStatus('success');
      reset();

      // Reset after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch {
      setSubmitStatus('error');
      setErrorMessage('Something went wrong. Please try again or contact us directly.');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const inputStyles =
    'w-full px-4 py-3.5 rounded-btn bg-light-bg border border-border text-charcoal placeholder:text-gray-text/40 focus:outline-none focus:border-primary/30 focus:ring-2 focus:ring-primary/10 transition-all duration-300 text-sm font-body';

  const labelStyles = 'block text-sm font-medium text-charcoal mb-1.5';
  const errorStyles = 'text-red-500 text-xs mt-1';

  return (
    <div>
      <AnimatePresence mode="wait">
        {submitStatus === 'success' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="text-center py-16"
          >
            <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={40} className="text-success" />
            </div>
            <h3 className="font-heading font-bold text-2xl text-charcoal mb-3">
              Thank You!
            </h3>
            <p className="text-gray-text max-w-md mx-auto">
              Your message has been received. Our team will get back to you within 24 hours.
            </p>
          </motion.div>
        ) : (
          <motion.form
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
            noValidate
          >
            {/* Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="contact-name" className={labelStyles}>
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your full name"
                  className={inputStyles}
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && (
                  <p className={errorStyles}>{errors.name.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="contact-email" className={labelStyles}>
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="you@company.com"
                  className={inputStyles}
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                />
                {errors.email && (
                  <p className={errorStyles}>{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Phone & Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="contact-phone" className={labelStyles}>
                  Phone Number <span className="text-red-400">*</span>
                </label>
                <input
                  id="contact-phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  className={inputStyles}
                  {...register('phone', {
                    required: 'Phone is required',
                    pattern: {
                      value: /^[+]?[\d\s()-]{7,15}$/,
                      message: 'Invalid phone number',
                    },
                  })}
                />
                {errors.phone && (
                  <p className={errorStyles}>{errors.phone.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="contact-company" className={labelStyles}>
                  Company Name
                </label>
                <input
                  id="contact-company"
                  type="text"
                  placeholder="Your company name"
                  className={inputStyles}
                  {...register('company')}
                />
              </div>
            </div>

            {/* Service & Budget */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="contact-service" className={labelStyles}>
                  Service Required <span className="text-red-400">*</span>
                </label>
                <select
                  id="contact-service"
                  className={`${inputStyles} appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23666%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_12px_center] bg-[length:20px]`}
                  {...register('service', { required: 'Please select a service' })}
                >
                  <option value="">Select a service</option>
                  {contactForm.serviceOptions.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className={errorStyles}>{errors.service.message}</p>
                )}
              </div>
              <div>
                <label htmlFor="contact-budget" className={labelStyles}>
                  Estimated Budget
                </label>
                <select
                  id="contact-budget"
                  className={`${inputStyles} appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23666%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_12px_center] bg-[length:20px]`}
                  {...register('budget')}
                >
                  <option value="">Select budget range</option>
                  {contactForm.budgetOptions.map((budget) => (
                    <option key={budget} value={budget}>
                      {budget}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="contact-message" className={labelStyles}>
                Tell us about your project
              </label>
              <textarea
                id="contact-message"
                rows={5}
                placeholder="Describe your project goals, timeline, and any specific requirements..."
                className={`${inputStyles} resize-none`}
                {...register('message')}
              />
            </div>

            {/* Error Message */}
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-4 rounded-btn bg-red-50 border border-red-200 text-red-600 text-sm"
              >
                <AlertCircle size={18} />
                <span>{errorMessage}</span>
              </motion.div>
            )}

            {/* Submit */}
            <Button
              type="submit"
              size="lg"
              loading={submitStatus === 'loading'}
              disabled={submitStatus === 'loading'}
              icon={<Send size={16} />}
              className="w-full"
              id="contact-form-submit"
            >
              Submit Request
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
