import { MenuHeadless } from "../utils/headless/menu"
import { Button } from "../utils/next"

export const Pricing1 = () => {
  return (
    <section x-data="{ selected: 'monthly' }">
        <div className="pb-64 bg-gray-100">
          <div className="max-w-7xl px-4 pt-20 mx-auto text-center sm:text-left">
            <h1 className="mb-3 text-4xl font-bold leading-tight text-gray-900 md:text-5xl md:font-extrabold">Plans &amp; Pricing</h1>
            <p className="mb-10 text-lg text-gray-600 md:text-xl">5 minute installation · Try Team plan features for 14 days · No credit card required</p>
            <div className="w-64 mx-auto -mb-2 sm:mx-0">
              <div className="flex justify-between p-2 text-center border border-purple-200 rounded-full">
                {/* <button className="w-full rounded-full btn btn-primary" @click="selected = 'monthly'" :class="{ 'btn-primary': selected === 'monthly', 'btn-link': selected === 'yearly' }">Bill Monthly</button>
                <button className="w-full rounded-full btn btn-link" @click="selected = 'yearly'" :class="{ 'btn-link': selected === 'monthly', 'btn-primary': selected === 'yearly' }">Bill Yearly</button> */}
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl pb-20 mx-auto -mt-48">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3 sm:gap-8">
            <div className="border-0 rounded-none shadow-none card sm:shadow-md sm:rounded-lg">
              <div className="flex flex-col justify-between p-6 border-b border-gray-200">
                <p className="mb-1 text-lg font-semibold text-gray-700">Free</p>
                <p className="pb-0 my-2 font-mono text-4xl font-extrabold text-gray-900 md:pb-2">$0</p>
                <a href="#" className="w-full mt-6 btn btn-primary btn-lg md:mt-16">Get Started</a>
              </div>
              <div className="flex flex-col flex-grow p-6 space-y-3">
                <div className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-green-600">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">Email APIs, SMTP Relay, and Webhooks</p>
                </div>
                <div className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-green-600">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">Suppression Management</p>
                </div>
                <div className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-green-600">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">Email Tracking and Analytics</p>
                </div>
                <div className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-green-600">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">99.99% Guaranteed Uptime SLA</p>
                </div>
              </div>
            </div>
            <div className="border-0 rounded-none shadow-none card sm:shadow-md sm:rounded-lg">
              <div className="flex flex-col justify-between p-6 border-b border-gray-200">
                <div>
                  <p className="mb-1 text-lg font-semibold text-gray-700">Team</p>
                  <p className="my-2 font-mono text-4xl font-extrabold text-gray-900" x-text="selected === 'monthly' ? '$9' : '$89'">$9</p>
                  <p className="text-base text-gray-600" x-text="selected === 'monthly' ? 'user / month' : 'user / year'">user / month</p>
                  <p className="text-base text-gray-600" x-text="selected === 'monthly' ? 'billed monthly' : 'billed yearly'">billed monthly</p>
                </div>
                <a href="#" className="w-full mt-6 btn btn-light btn-lg">Try for free</a>
              </div>
              <div className="flex flex-col flex-grow p-6 space-y-3">
                <div className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-green-600">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">Email APIs, SMTP Relay, and Webhooks</p>
                </div>
                <div className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-green-600">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">Suppression Management</p>
                </div>
                <div className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-green-600">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">Email Tracking and Analytics</p>
                </div>
                <div className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-green-600">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">99.99% Guaranteed Uptime SLA</p>
                </div>
                <div className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-green-600">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">5 Days of Log Retention</p>
                </div>
                <div className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-green-600">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">Limited 24/7 Ticket Support</p>
                </div>
                <div className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-green-600">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">1 Dedicated IP (Foundation 100k and up)</p>
                </div>
                <div className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-green-600">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">1,000 Email Address Validations</p>
                </div>
              </div>
            </div>
            <div className="border-0 rounded-none shadow-none card sm:shadow-md sm:rounded-lg">
              <div className="flex flex-col justify-between p-6 border-b border-gray-200">
                <div>
                  <p className="mb-1 text-lg font-semibold text-gray-700">Company</p>
                  <p className="my-2 font-mono text-4xl font-extrabold text-gray-900" x-text="selected === 'monthly' ? '$21' : '$189'">$21</p>
                  <p className="text-base text-gray-600" x-text="selected === 'monthly' ? 'user / month' : 'user / year'">user / month</p>
                  <p className="text-base text-gray-600" x-text="selected === 'monthly' ? 'billed monthly' : 'billed yearly'">billed monthly</p>
                </div>
                <a href="#" className="w-full mt-6 btn btn-light btn-lg">Try for free</a>
              </div>
              <div className="flex flex-col flex-grow p-6 space-y-3">
                <div className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-green-600">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">Email APIs, SMTP Relay, and Webhooks</p>
                </div>
                <div className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-green-600">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">Suppression Management</p>
                </div>
                <div className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-green-600">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">Email Tracking and Analytics</p>
                </div>
                <div className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-green-600">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">99.99% Guaranteed Uptime SLA</p>
                </div>
                <div className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-green-600">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">5 Days of Log Retention</p>
                </div>
                <div className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-green-600">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">Limited 24/7 Ticket Support</p>
                </div>
                <div className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-green-600">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">1 Dedicated IP (Foundation 100k and up)</p>
                </div>
                <div className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-green-600">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">1,000 Email Address Validations</p>
                </div>
                <div className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-green-600">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">Instant Chat Support</p>
                </div>
                <div className="flex items-start">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="flex-none w-4 h-4 mt-1 mr-2 text-green-600">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">Custom Features</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  )
}