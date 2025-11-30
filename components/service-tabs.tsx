import { Service } from '@/lib/definitions'

interface ServiceTabsProps {
  services: Service[]
}

export default function ServiceTabs({ services }: ServiceTabsProps) {
  return (
    <div>
      <div className="flex flex-1 items-center justify-center gap-4">
        {services.map((service, serviceIndex) => {
          return (
            <span
              key={`${serviceIndex}-${service.name}`}
              className="inline-flex items-center gap-x-1.5 rounded-full px-4 py-1 text-xs font-medium text-gray-600 dark:text-gray-300"
              style={{
                backgroundColor: `${service.color}1a`,
              }}
            >
              <svg
                viewBox="0 0 6 6"
                aria-hidden="true"
                className="size-2"
                style={{
                  fill: service.color ?? '#000000',
                }}
              >
                <circle r={3} cx={3} cy={3} />
              </svg>
              {service.name}
            </span>
          )
        })}
      </div>
    </div>
  )
}
