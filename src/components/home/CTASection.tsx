import ButtonWithArrow from "@/components/ui/button-with-arrow";
import { CheckCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using ViScan to streamline their operations 
            and achieve unprecedented accuracy in visual recognition.
          </p>

          {/* CTA Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="border-0 shadow-xl bg-white/10 backdrop-blur-sm rounded-2xl">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Start Free Trial</h3>
                <p className="text-blue-100 mb-6">
                  Get started with ViScan today. No credit card required, full access for 14 days.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-blue-100">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    <span>Full feature access</span>
                  </div>
                  <div className="flex items-center text-blue-100">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    <span>No setup fees</span>
                  </div>
                  <div className="flex items-center text-blue-100">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    <span>Cancel anytime</span>
                  </div>
                </div>
                <ButtonWithArrow size="lg" className="w-full bg-white text-blue-600 hover:bg-gray-100" showArrowCircle={false}>
                  Start Free Trial
                </ButtonWithArrow>
              </div>
            </div>

            <div className="border-0 shadow-xl bg-white/10 backdrop-blur-sm rounded-2xl">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Schedule Demo</h3>
                <p className="text-blue-100 mb-6">
                  See ViScan in action with a personalized demo from our experts.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-blue-100">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    <span>Personalized walkthrough</span>
                  </div>
                  <div className="flex items-center text-blue-100">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    <span>Q&A session</span>
                  </div>
                  <div className="flex items-center text-blue-100">
                    <CheckCircle className="w-5 h-5 mr-3 text-green-400" />
                    <span>Custom use case demo</span>
                  </div>
                </div>
                <ButtonWithArrow variant="outline" size="lg" className="w-full border-white text-white hover:bg-white hover:text-blue-600" showArrowCircle={false}>
                  Schedule Demo
                </ButtonWithArrow>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-blue-100 mb-6">
              Get the latest updates on new features, case studies, and industry insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-blue-200 px-4 py-2 rounded-lg border"
              />
              <ButtonWithArrow className="bg-white text-blue-600 hover:bg-gray-100" showArrowCircle={false}>
                Subscribe
              </ButtonWithArrow>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 