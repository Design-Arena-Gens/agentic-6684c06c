'use client';

import { useState } from 'react';

interface StartupIdea {
  title: string;
  description: string;
  market: string;
  revenue: string;
  skillsNeeded: string[];
  timeToMVP: string;
  difficulty: string;
  whyNow: string;
  firstSteps: string[];
  marketSize: string;
  uniqueAngle: string;
}

const startupIdeas: StartupIdea[] = [
  {
    title: "AI-Powered Micro-SaaS for Niche Communities",
    description: "Build hyper-specific automation tools for underserved professional communities (e.g., veterinary clinics, small law firms, dance studios). Use AI to automate their repetitive workflows.",
    market: "Niche B2B SaaS",
    revenue: "Subscription ($29-$199/month per customer)",
    skillsNeeded: ["Basic coding", "No-code tools (Bubble, Make.com)", "Customer research"],
    timeToMVP: "4-8 weeks",
    difficulty: "Medium",
    whyNow: "AI APIs make complex automation accessible to solo builders. Small businesses are desperate for affordable, specific solutions.",
    firstSteps: [
      "Join 5 niche community forums (Reddit, Facebook groups)",
      "Interview 10 potential customers about their biggest time-wasters",
      "Build MVP with no-code tools + OpenAI API",
      "Get first 3 paying customers before writing code"
    ],
    marketSize: "$50M+ per niche",
    uniqueAngle: "Focus on communities too small for big tech but collectively huge"
  },
  {
    title: "Faceless YouTube Automation Agency",
    description: "Create high-quality, faceless YouTube channels in trending niches (psychology, space, true crime). Use AI voiceovers, stock footage, and scripting. Monetize through AdSense and affiliate marketing.",
    market: "Content creation + Ad revenue",
    revenue: "Ad revenue ($2-10k/month per channel at scale) + sponsorships",
    skillsNeeded: ["Video editing", "AI tools (ElevenLabs, Midjourney)", "SEO/YouTube algorithm"],
    timeToMVP: "2-3 weeks per channel",
    difficulty: "Low-Medium",
    whyNow: "AI voice and image generation are incredibly realistic. YouTube rewards consistency, not personality.",
    firstSteps: [
      "Research 10 trending faceless channels in your niche",
      "Create 5 test videos using free AI tools",
      "Post consistently (3x/week) for 90 days",
      "Optimize titles/thumbnails based on analytics"
    ],
    marketSize: "$15B+ (YouTube ad market)",
    uniqueAngle: "Zero face-time required, infinitely scalable with templates"
  },
  {
    title: "Local Lead Generation Sites",
    description: "Build simple websites ranking for local service searches ('plumber in [city]', 'roof repair [city]'). Sell leads to local businesses at $50-200 per lead.",
    market: "Local SEO / Lead generation",
    revenue: "Pay-per-lead or monthly retainers ($500-5k/month per site)",
    skillsNeeded: ["Basic SEO", "WordPress/HTML", "Local business sales"],
    timeToMVP: "2-4 weeks per site",
    difficulty: "Low-Medium",
    whyNow: "Local businesses still struggle with digital marketing. Low competition in many cities.",
    firstSteps: [
      "Pick a service niche (HVAC, roofing, legal)",
      "Find 5 cities with low competition (Google Keyword Planner)",
      "Build simple site with contact form",
      "Get 3 local backlinks, wait 2-3 months for ranking",
      "Call local businesses and offer leads"
    ],
    marketSize: "$100B+ (local advertising)",
    uniqueAngle: "You own the asset. Businesses pay you forever for quality leads."
  },
  {
    title: "API Wrapper Micro-SaaS",
    description: "Take complex APIs (Stripe, Twilio, OpenAI) and create dead-simple interfaces for non-technical users. Example: 'Instagram Auto-DM for new followers' or 'Receipt digitizer for freelancers'.",
    market: "Micro-SaaS / API tools",
    revenue: "Freemium model ($9-49/month)",
    skillsNeeded: ["Basic backend development", "API integration", "Simple frontend"],
    timeToMVP: "3-6 weeks",
    difficulty: "Medium",
    whyNow: "APIs are powerful but intimidating. Non-technical entrepreneurs need simple solutions.",
    firstSteps: [
      "Browse r/SaaS and Indie Hackers for pain points",
      "Pick one API and build simplest possible wrapper",
      "Launch on Product Hunt and Twitter",
      "Iterate based on early user feedback"
    ],
    marketSize: "$10M-100M per niche",
    uniqueAngle: "Solve one micro-problem extremely well. Charge subscription for convenience."
  },
  {
    title: "Digital Product Marketplace for Teens/Gen Z",
    description: "Build a platform where Gen Z creators sell digital products (Notion templates, Instagram filters, Discord server templates, AI prompts). Take 10-20% commission.",
    market: "Creator economy / Digital products",
    revenue: "Transaction fees (10-20% per sale)",
    skillsNeeded: ["Web development", "Payment integration", "Social media marketing"],
    timeToMVP: "6-10 weeks",
    difficulty: "Medium-High",
    whyNow: "Gen Z is entrepreneurial but underserved. They want teen-centric platforms, not Etsy.",
    firstSteps: [
      "Survey 50 teens about what digital products they'd buy/sell",
      "Build simple marketplace (Stripe + Next.js)",
      "Recruit 10 creators to launch with exclusive products",
      "Go viral on TikTok with creator testimonials"
    ],
    marketSize: "$10B+ (Gen Z spending power growing)",
    uniqueAngle: "Platform built BY teens FOR teens. Speak their language."
  },
  {
    title: "AI Cold Email Tool for Service Providers",
    description: "Create an AI that scrapes business data and writes hyper-personalized cold emails for freelancers/agencies. Better than generic tools like Lemlist.",
    market: "Sales automation / B2B SaaS",
    revenue: "Subscription ($49-299/month)",
    skillsNeeded: ["Python/JavaScript", "OpenAI API", "Web scraping"],
    timeToMVP: "4-8 weeks",
    difficulty: "Medium",
    whyNow: "Cold email still works but generic templates are dying. AI personalization is the new edge.",
    firstSteps: [
      "Build prototype that scrapes LinkedIn + company websites",
      "Use GPT-4 to generate personalized emails",
      "Test with 10 freelancers, refine based on reply rates",
      "Launch on Indie Hackers and niche communities"
    ],
    marketSize: "$5B+ (sales automation software)",
    uniqueAngle: "10x better personalization than competitors at fraction of cost"
  },
  {
    title: "Niche Newsletter with Paid Community",
    description: "Curate hyper-specific content for a passionate niche (indie game devs, DTC brand founders, Notion power users). Monetize through premium community access ($10-50/month).",
    market: "Newsletter / Community",
    revenue: "Subscriptions + sponsorships",
    skillsNeeded: ["Writing", "Community management", "Email marketing"],
    timeToMVP: "1-2 weeks",
    difficulty: "Low",
    whyNow: "Attention is fragmented. Niche communities with high trust command premium prices.",
    firstSteps: [
      "Pick a niche you're passionate about and understands",
      "Write 5 free editions to build audience (share on Reddit/Twitter)",
      "Launch paid tier at 500 subscribers",
      "Add Discord community for paid members"
    ],
    marketSize: "$1M-50M per niche",
    uniqueAngle: "You become THE trusted source in your micro-niche"
  },
  {
    title: "Chrome Extension for Specific Power Users",
    description: "Build productivity extensions for specific workflows (e.g., 'LinkedIn outreach tracker', 'Twitter thread compiler', 'Notion web clipper alternative').",
    market: "Browser extensions / Productivity",
    revenue: "Freemium ($5-15/month) or one-time purchase",
    skillsNeeded: ["JavaScript", "Chrome Extension API", "Basic UI design"],
    timeToMVP: "2-4 weeks",
    difficulty: "Low-Medium",
    whyNow: "Remote work = massive productivity tool market. Extensions are easy to build and distribute.",
    firstSteps: [
      "Browse Chrome Web Store reviews for feature requests",
      "Build MVP solving ONE specific pain point",
      "Launch on Product Hunt",
      "Share in communities where your users hang out"
    ],
    marketSize: "$10M-100M per niche",
    uniqueAngle: "Low competition, instant distribution through Chrome Store"
  },
  {
    title: "Automated Social Media Content Repurposing",
    description: "Tool that takes long-form content (YouTube videos, podcasts, blogs) and automatically creates 50+ social media posts across platforms using AI.",
    market: "Creator tools / Marketing automation",
    revenue: "Subscription ($29-99/month)",
    skillsNeeded: ["AI/ML basics", "API integration", "Web development"],
    timeToMVP: "6-8 weeks",
    difficulty: "Medium",
    whyNow: "Creators are overwhelmed. They need to be on every platform but lack time.",
    firstSteps: [
      "Build MVP that converts YouTube videos to Twitter threads",
      "Test with 5-10 creators and get testimonials",
      "Add more platforms based on demand",
      "Launch to creator communities on Twitter/Reddit"
    ],
    marketSize: "$50B+ (creator economy)",
    uniqueAngle: "Save creators 10+ hours per week with one-click repurposing"
  },
  {
    title: "Local Service Booking App for Underserved Markets",
    description: "Create hyper-local booking platforms for services big tech ignores (mobile dog groomers, house cleaners in small towns, local tutors). Take 15% commission.",
    market: "Local marketplace",
    revenue: "Transaction fees + premium listings",
    skillsNeeded: ["Mobile app development OR no-code tools", "Local marketing"],
    timeToMVP: "4-8 weeks",
    difficulty: "Medium",
    whyNow: "Small cities are underserved. Local service providers need digital presence.",
    firstSteps: [
      "Pick one city and one service category",
      "Manually recruit 5 service providers",
      "Build simple booking site (even Google Forms + Calendly works initially)",
      "Market to local Facebook groups",
      "Scale to nearby cities once proven"
    ],
    marketSize: "$100M+ per region",
    uniqueAngle: "Dominate local markets too small for venture-backed startups"
  }
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [expandedIdea, setExpandedIdea] = useState<number | null>(null);

  const categories = ['all', 'SaaS', 'Content', 'Marketplace', 'Service'];
  const difficulties = ['all', 'Low', 'Low-Medium', 'Medium', 'Medium-High'];

  const filteredIdeas = startupIdeas.filter(idea => {
    const categoryMatch = selectedCategory === 'all' || idea.market.toLowerCase().includes(selectedCategory.toLowerCase());
    const difficultyMatch = selectedDifficulty === 'all' || idea.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          color: 'white',
          marginBottom: '40px',
          paddingTop: '40px'
        }}>
          <h1 style={{
            fontSize: '48px',
            fontWeight: 'bold',
            marginBottom: '10px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
          }}>
            💎 Million Dollar Solo Startup Ideas
          </h1>
          <p style={{
            fontSize: '20px',
            opacity: 0.95,
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Unique, high-potential ideas you can build alone as a teenager. No team required. Real revenue potential.
          </p>
          <div style={{
            marginTop: '20px',
            padding: '15px',
            background: 'rgba(255,255,255,0.2)',
            borderRadius: '10px',
            display: 'inline-block'
          }}>
            <p style={{ margin: 0, fontSize: '16px' }}>
              ✨ <strong>Why these work:</strong> Low saturation • Teenager-friendly • Solo-executable • Million-dollar potential
            </p>
          </div>
        </div>

        {/* Filters */}
        <div style={{
          background: 'white',
          borderRadius: '15px',
          padding: '25px',
          marginBottom: '30px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '20px'
          }}>
            <div>
              <label style={{
                display: 'block',
                fontWeight: 'bold',
                marginBottom: '10px',
                color: '#333',
                fontSize: '14px'
              }}>
                CATEGORY
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '8px',
                  border: '2px solid #e0e0e0',
                  fontSize: '16px',
                  cursor: 'pointer',
                  background: 'white'
                }}
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label style={{
                display: 'block',
                fontWeight: 'bold',
                marginBottom: '10px',
                color: '#333',
                fontSize: '14px'
              }}>
                DIFFICULTY
              </label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '8px',
                  border: '2px solid #e0e0e0',
                  fontSize: '16px',
                  cursor: 'pointer',
                  background: 'white'
                }}
              >
                {difficulties.map(diff => (
                  <option key={diff} value={diff}>
                    {diff.charAt(0).toUpperCase() + diff.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div style={{
            marginTop: '15px',
            padding: '12px',
            background: '#f0f7ff',
            borderRadius: '8px',
            fontSize: '14px',
            color: '#1a73e8'
          }}>
            Showing {filteredIdeas.length} idea{filteredIdeas.length !== 1 ? 's' : ''}
          </div>
        </div>

        {/* Ideas Grid */}
        <div style={{
          display: 'grid',
          gap: '25px'
        }}>
          {filteredIdeas.map((idea, index) => (
            <div
              key={index}
              style={{
                background: 'white',
                borderRadius: '15px',
                padding: '30px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                transition: 'transform 0.2s',
                cursor: 'pointer'
              }}
              onClick={() => setExpandedIdea(expandedIdea === index ? null : index)}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'start',
                marginBottom: '15px'
              }}>
                <h2 style={{
                  fontSize: '24px',
                  color: '#667eea',
                  margin: 0,
                  flex: 1
                }}>
                  {idea.title}
                </h2>
                <span style={{
                  background: getDifficultyColor(idea.difficulty),
                  color: 'white',
                  padding: '5px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  whiteSpace: 'nowrap',
                  marginLeft: '15px'
                }}>
                  {idea.difficulty}
                </span>
              </div>

              <p style={{
                fontSize: '16px',
                color: '#555',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                {idea.description}
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '15px',
                marginBottom: '20px'
              }}>
                <div>
                  <div style={{ fontSize: '12px', color: '#888', marginBottom: '5px', fontWeight: 'bold' }}>
                    MARKET
                  </div>
                  <div style={{ fontSize: '14px', color: '#333' }}>{idea.market}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#888', marginBottom: '5px', fontWeight: 'bold' }}>
                    REVENUE MODEL
                  </div>
                  <div style={{ fontSize: '14px', color: '#333' }}>{idea.revenue}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#888', marginBottom: '5px', fontWeight: 'bold' }}>
                    TIME TO MVP
                  </div>
                  <div style={{ fontSize: '14px', color: '#333' }}>{idea.timeToMVP}</div>
                </div>
                <div>
                  <div style={{ fontSize: '12px', color: '#888', marginBottom: '5px', fontWeight: 'bold' }}>
                    MARKET SIZE
                  </div>
                  <div style={{ fontSize: '14px', color: '#333', fontWeight: 'bold' }}>{idea.marketSize}</div>
                </div>
              </div>

              {expandedIdea === index && (
                <div style={{
                  marginTop: '25px',
                  paddingTop: '25px',
                  borderTop: '2px solid #f0f0f0'
                }}>
                  <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ color: '#667eea', fontSize: '18px', marginBottom: '10px' }}>
                      🎯 Why This Works Now
                    </h3>
                    <p style={{ color: '#555', lineHeight: '1.6', fontSize: '15px' }}>
                      {idea.whyNow}
                    </p>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ color: '#667eea', fontSize: '18px', marginBottom: '10px' }}>
                      💡 Unique Angle
                    </h3>
                    <p style={{ color: '#555', lineHeight: '1.6', fontSize: '15px', fontStyle: 'italic' }}>
                      {idea.uniqueAngle}
                    </p>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <h3 style={{ color: '#667eea', fontSize: '18px', marginBottom: '10px' }}>
                      🛠️ Skills Needed
                    </h3>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {idea.skillsNeeded.map((skill, i) => (
                        <span
                          key={i}
                          style={{
                            background: '#f0f7ff',
                            color: '#1a73e8',
                            padding: '6px 12px',
                            borderRadius: '15px',
                            fontSize: '13px'
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 style={{ color: '#667eea', fontSize: '18px', marginBottom: '10px' }}>
                      🚀 First Steps to Launch
                    </h3>
                    <ol style={{ paddingLeft: '20px', margin: 0 }}>
                      {idea.firstSteps.map((step, i) => (
                        <li
                          key={i}
                          style={{
                            color: '#555',
                            lineHeight: '1.8',
                            fontSize: '15px',
                            marginBottom: '8px'
                          }}
                        >
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              )}

              <div style={{
                marginTop: '20px',
                textAlign: 'center',
                color: '#667eea',
                fontSize: '14px',
                fontWeight: 'bold'
              }}>
                {expandedIdea === index ? '▲ Click to collapse' : '▼ Click for detailed breakdown'}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{
          marginTop: '50px',
          padding: '30px',
          background: 'rgba(255,255,255,0.95)',
          borderRadius: '15px',
          textAlign: 'center',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
        }}>
          <h3 style={{ color: '#667eea', marginBottom: '15px', fontSize: '22px' }}>
            🎓 Pro Tips for Teen Founders
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            textAlign: 'left',
            marginTop: '20px'
          }}>
            <div style={{ padding: '15px', background: '#f8f9fa', borderRadius: '10px' }}>
              <strong style={{ color: '#667eea' }}>Start Tiny:</strong> Don't build the whole vision. Test with 5-10 users first.
            </div>
            <div style={{ padding: '15px', background: '#f8f9fa', borderRadius: '10px' }}>
              <strong style={{ color: '#667eea' }}>Charge Early:</strong> If people won't pay $10/month, they won't pay $100/month.
            </div>
            <div style={{ padding: '15px', background: '#f8f9fa', borderRadius: '10px' }}>
              <strong style={{ color: '#667eea' }}>Your Age is an Asset:</strong> Adults love supporting young founders. Use it!
            </div>
            <div style={{ padding: '15px', background: '#f8f9fa', borderRadius: '10px' }}>
              <strong style={{ color: '#667eea' }}>Build in Public:</strong> Share your journey on Twitter. You'll find customers & mentors.
            </div>
          </div>
          <div style={{
            marginTop: '25px',
            padding: '20px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: '10px',
            color: 'white'
          }}>
            <p style={{ margin: 0, fontSize: '16px', lineHeight: '1.6' }}>
              <strong>Remember:</strong> Every million-dollar company started with one person and one idea.
              Pick ONE idea from this list and commit to it for 90 days. That's all it takes to know if it'll work.
            </p>
          </div>
        </div>

        <div style={{
          textAlign: 'center',
          color: 'white',
          marginTop: '30px',
          paddingBottom: '30px',
          opacity: 0.9
        }}>
          Built for ambitious teen founders 🚀
        </div>
      </div>
    </div>
  );
}

function getDifficultyColor(difficulty: string): string {
  switch (difficulty) {
    case 'Low':
      return '#10b981';
    case 'Low-Medium':
      return '#3b82f6';
    case 'Medium':
      return '#f59e0b';
    case 'Medium-High':
      return '#ef4444';
    default:
      return '#6b7280';
  }
}
