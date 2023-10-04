import Image from 'next/image'
import Filters from '@/components/Filters'
import SchoolCard from '@/components/SchoolCard'

export default function Home() {
  return (
    <section className="flex-start flex-col paddings mb-16">
      <Filters />
      <section className="schools-grid">
        <SchoolCard />
      </section>

    </section>
  )
}
