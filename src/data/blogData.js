// src/data/blogData.js

import netflixVacationImg from '../assets/blogs/netflix-vacation.png';
import breakingBarriersImg from '../assets/blogs/barriers.png';

export const blogPosts = [
  {
    id: '1',
    slug: 'why-netflix-no-vacation-policy-works', // ✅ SEO-friendly slug
    title: 'Why Netflix’s “No Vacation Policy” Works',
    date: 'June 12, 2025',
    category: 'Business and Management',
    author: {
      name: 'Ajinkya Inamdar',
      bio: 'Ajinkya Inamdar is a business and longevity enthusiast who writes about leadership, innovation, and organizational culture. He believes in combining trust and high performance to build remarkable teams.'
    },
    image: netflixVacationImg,
    description: 'Learn why Netflix’s no-vacation policy boosts trust, performance, and culture.',
    keywords: 'Netflix, no vacation policy, HR, company culture, productivity',
    ogImage: 'https://yourwebsite.com/assets/blogs/netflix-vacation-og.jpg',
    meta: {
      title: 'Why Netflix’s “No Vacation Policy” Works | Ajinkya Inamdar Blog',
      description: 'How Netflix’s no-vacation policy builds trust, empowers employees, and enhances company culture.',
      tags: ['Netflix', 'Work Culture', 'HR Innovation']
    },
    content: `
      <h1 class="text-3xl font-extrabold font-sans mb-4 tracking-tight">Why Netflix’s “No Vacation Policy” Works</h1>
      <p class="font-serif text-lg leading-relaxed tracking-wide mb-4">
        <strong>Based on the book <em>No Rules Rules</em> by Netflix CEO Reed Hastings and Erin Meyer.</strong>
      </p>

      <h3 class="text-2xl font-bold font-sans mt-6 mb-2 tracking-tight">What is Netflix’s “No Vacation Policy”?</h3>
      <p class="font-sans text-base leading-relaxed mb-4">
        Netflix doesn’t have fixed vacation days. Employees are free to take time off whenever they feel it’s right as long as they’re getting their work done.
      </p>

      <h3 class="text-2xl font-bold font-sans mt-6 mb-2 tracking-tight">How does it work, and why is it important?</h3>
      <ul class="list-disc list-inside space-y-2 font-sans text-base">
        <li><strong>Trust, not tracking:</strong> Netflix trusts employees to take responsibility for their own time.</li>
        <li><strong>Better performance:</strong> When people rest when they need to, they come back more focused, creative, and motivated.</li>
      </ul>

      <h3 class="text-2xl font-bold font-sans mt-6 mb-2 tracking-tight">What helps make this policy successful?</h3>
      <ul class="list-disc list-inside space-y-2 font-sans text-base">
        <li><strong>High-performing teams:</strong> Netflix only hires top talent. These employees are self-driven and don’t misuse this freedom.</li>
        <li><strong>Open feedback culture:</strong> If someone isn’t using or managing their time well, others give honest feedback to help them improve quickly.</li>
      </ul>

      <h3 class="text-2xl font-bold font-sans mt-6 mb-2 tracking-tight">Why does this work at Netflix but not in most companies?</h3>
      <ul class="list-disc list-inside space-y-2 font-sans text-base">
        <li>Netflix has strong, responsible people and a culture where everyone speaks openly.</li>
        <li>In many companies, employees don’t feel safe to take time off or give/receive honest feedback.</li>
      </ul>

      <h3 class="text-2xl font-bold font-sans mt-6 mb-2 tracking-tight">What’s the situation like in India?</h3>
      <ul class="list-disc list-inside space-y-2 font-sans text-base">
        <li><strong>Fear of taking leave:</strong> 35–40% of Indian employees avoid taking leave because they’re afraid of missing out or being judged.</li>
        <li><strong>Feeling overworked:</strong> A 2018 survey found 75% of Indians feel they don’t get enough vacation, even if they’re allowed to take it.</li>
      </ul>

      <h3 class="text-2xl font-bold font-sans mt-6 mb-2 tracking-tight">Resources:</h3>
      <ul class="list-disc list-inside space-y-2 font-sans text-base">
        <li><a href="https://lnkd.in/dyMniPmq" class="text-purple-600 underline font-medium hover:text-purple-800 transition-colors" target="_blank">LinkedIn Article 1</a></li>
        <li><a href="https://lnkd.in/dK6iJ7Xs" class="text-purple-600 underline font-medium hover:text-purple-800 transition-colors" target="_blank">LinkedIn Article 2</a></li>
      </ul>

      <h3 class="text-2xl font-bold font-sans mt-6 mb-2 tracking-tight">Why is it hard to apply this policy in India?</h3>
      <ul class="list-disc list-inside space-y-2 font-sans text-base">
        <li>People are often expected to always be available.</li>
        <li>Managers care more about how many hours you work, not the results.</li>
        <li>There’s fear that taking too much time off will hurt your career.</li>
      </ul>

      <h3 class="text-2xl font-bold font-sans mt-6 mb-2 tracking-tight">What can go wrong with this policy?</h3>
      <ul class="list-disc list-inside space-y-2 font-sans text-base">
        <li>If leaders don’t take leave themselves, employees might feel guilty about taking time off.</li>
        <li>Some people might misuse the policy if no one gives honest feedback.</li>
        <li>It can cause problems if a few people take too much leave while others have to cover for them.</li>
      </ul>

      <h3 class="text-2xl font-bold font-sans mt-6 mb-2 tracking-tight">Indian Companies That Adopted This:</h3>
      <ul class="list-disc list-inside space-y-2 font-sans text-base">
        <li><strong>Myntra:</strong> Offers unlimited wellness leaves for mental and physical health.</li>
        <li><strong>MakeMyTrip:</strong> Offers unlimited leave with mandatory paid time off.</li>
      </ul>

      <h3 class="text-2xl font-bold font-sans mt-6 mb-2 tracking-tight">Final Thought</h3>
      <p class="font-sans text-base leading-relaxed mt-2">
        Netflix’s no-vacation-policy works because it’s backed by trust, great people, and clear feedback. For other companies to try something similar, they must first build a culture of honesty, high performance, and freedom with responsibility.
      </p>

      <p class="mt-6 italic text-gray-600 font-serif text-base">
        Next question: how can we apply this in an organization with lower talent density?
      </p>

      <!-- ✅ Author Bio -->
      <div class="border-t border-gray-200 mt-8 pt-6">
        <p class="font-semibold text-lg text-gray-800">Written by Ajinkya Inamdar</p>
        <p class="text-sm text-gray-600 mt-1">Ajinkya Inamdar is a business and longevity enthusiast who writes about leadership, innovation, and organizational culture.</p>
      </div>
    `
  },

  {
    id: '2',
    slug: 'leadership-means-breaking-barriers',
    title: 'Leadership means "Breaking Barriers"',
    date: 'August 17, 2025',
    category: 'Business and Management',
    author: {
      name: 'Ajinkya Inamdar',
      bio: 'Ajinkya Inamdar writes about leadership and human potential — exploring what separates managers from true leaders who drive transformation.'
    },
    image: breakingBarriersImg,
    ogImage: breakingBarriersImg,
    description: 'Explore how true leadership is about ownership, advocacy, and transforming systems to achieve results beyond effort.',
    keywords: 'leadership, management, ownership, advocacy, Breaking Barriers',
    meta: {
      title: 'Leadership Means Breaking Barriers | Ajinkya Inamdar Blog',
      description: 'True leadership is about ownership, advocacy, and transforming systems to achieve more with less effort.',
      tags: ['Leadership', 'Management', 'Teamwork', 'Ownership']
    },
    content: `
      <h1 class="text-3xl font-extrabold font-sans mb-4 tracking-tight">Leadership means "Breaking Barriers"</h1>
      <p class="font-sans text-base leading-relaxed mb-4">
        Many people assume leadership is about how hard you work. Long hours, dedication, and persistence certainly matter but effort alone doesn’t equal great leadership. What truly sets leaders apart is <strong>ownership</strong>: fully embracing responsibility for the success of their team, the obstacles in their way, and the direction they’re headed.
      </p>
      <p class="font-sans text-base leading-relaxed mb-4">
        Imagine a team working tirelessly but still falling short because the right tools or resources aren’t in place. As a manager, you might raise concerns, suggest improvements, or adapt within the boundaries given. But here’s the catch: if the team doesn’t deliver, the world won’t ask about the lack of resources. They’ll want to know who was accountable. And accountability always lands at the leader’s desk.
      </p>
      <p class="font-sans text-base leading-relaxed mb-4">
        Leadership brings with it an expectation: not just to keep things running, but to challenge systems, raise your voice when something isn’t working, secure what your team truly needs, and fight for solutions even when it’s uncomfortable.
      </p>

      <h3 class="text-2xl font-bold font-sans mt-8 mb-2 tracking-tight">The Two Faces of Leadership: Execution and Advocacy</h3>
      <p class="font-sans text-base leading-relaxed mb-4">
        Leadership lives at the intersection of two demanding roles: <strong>execution</strong> and <strong>advocacy</strong>.
      </p>
      <p class="font-sans text-base leading-relaxed mb-4">
        <strong>Execution</strong> is managing what’s in front of you—coordinating tasks, aligning people, and hitting targets. <strong>Advocacy</strong> is challenging broken processes, pushing for better tools, and reshaping what’s possible for your team.
      </p>

      <h3 class="text-2xl font-bold font-sans mt-8 mb-2 tracking-tight">The Discomfort That Defines Leadership</h3>
      <p class="font-sans text-base leading-relaxed mb-4">
        The hardest parts of leadership are rarely the tasks—they’re the uncomfortable conversations and the repeated requests that test your patience. Asking once is easy. Asking three or four times, even when ignored, is where your commitment is truly tested.
      </p>
      <p class="font-sans text-base leading-relaxed mb-4">
        That persistence, that willingness to embrace discomfort, is what separates passive managers from transformative leaders.
      </p>

      <p class="mt-4 italic text-gray-600 font-serif text-base">A manager sustains momentum. A leader redefines what’s possible.</p>

      <!-- ✅ Author Bio -->
      <div class="border-t border-gray-200 mt-8 pt-6">
        <p class="font-semibold text-lg text-gray-800">Written by Ajinkya Inamdar</p>
        <p class="text-sm text-gray-600 mt-1">Ajinkya Inamdar writes about leadership and human potential — exploring what separates managers from true leaders who drive transformation.</p>
      </div>
    `
  }
];
