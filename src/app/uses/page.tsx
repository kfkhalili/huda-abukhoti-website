import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({
  title,
  href,
  children,
}: {
  title: string
  href?: string
  children: React.ReactNode
}) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export const metadata = {
  title: 'Uses',
  description: 'Software I use, gadgets I love, and other things I recommend.',
}

export default function Uses() {
  return (
    <SimpleLayout
      title="Software I use, gadgets I love, and other things I recommend."
      intro="People always ask about my creative setup—everything from the gear I depend on to make art and design, to the apps that keep me (mostly) on track. Here’s a big list of all of my favorite stuff."
    >
      <div className="space-y-20">
        <ToolsSection title="Workstation">
          <Tool title="iPhone 16 Pro Max">
            It always surprises people that I rely on a phone as my main
            workstation, The smaller form factor makes sense if you're focused
            on social media and it helps me keep designs concise and visually
            striking, exactly the way they’ll appear in someone’s feed. It’s
            always within reach, so I’m never far from inspiration-or a
            deadline.
          </Tool>
          <Tool title="iPad Pro 12.9” 5th Gen">
            For whenever I need more room to sketch or prototype. A paper-like
            screen protector helps it feel traditional, but I can keep adding
            layers and undo any mistakes without running out of space.
          </Tool>
          <Tool title="MacBook Air 2020">
            It might be a little dated, but it still handles everyday tasks like
            a champ and can even keep up with heavier design software when
            deadlines loom. Definitely a reminder that you don’t always need the
            newest gear to get real work done.
          </Tool>
        </ToolsSection>
        <ToolsSection title="Art & Design">
          <Tool title="Procreate">
            My favorite tool for digital sketching and painting. I love that
            classic pen-on-paper vibe, and unlimited layers mean I can iterate
            without worrying about ruining a piece.
          </Tool>
          <Tool title="GoDaddy Studio">
            A go-to for quick social media graphics or brand visuals. It saves
            me so much time when I have to churn out something polished on short
            notice.
          </Tool>
          <Tool title="Adobe Creative Cloud">
            Where I handle photo edits and vector work in one place. It keeps
            everything I need in sync and makes juggling different projects a
            little less chaotic.
          </Tool>
          <Tool title="Figma">
            Collaboration is key for many of my projects, so having a real-time,
            cloud-based space for feedback has been a game-changer. No more
            endless versions floating around in my inbox.
          </Tool>
        </ToolsSection>
        <ToolsSection title="AI">
          <Tool title="ChatGPT">
            I bounce ideas off it when I’m stuck on a creative direction or need
            quick copy suggestions. It’s like having a brainstorming buddy who’s
            always on call.
          </Tool>
          <Tool title="Runway ML">
            Video work can be a time sink, so any help with rotoscoping and
            background removal is a major win. I’m always blown away by how much
            time I save now.
          </Tool>
        </ToolsSection>
      </div>
    </SimpleLayout>
  )
}
