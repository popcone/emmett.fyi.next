import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const items = [
  { name: 'Save and schedule', href: '#' },
  { name: 'Save and publish', href: '#' },
  { name: 'Export PDF', href: '#' },
]

export default function Nav() {
  return (
    <div className="inline-flex rounded-md shadow-sm dark:shadow-none">
      <button
        type="button"
        className="relative inline-flex items-center rounded-l-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-10 dark:bg-white/10 dark:text-white dark:ring-gray-700 dark:hover:bg-white/20"
      >
        Save changes
      </button>
      <Menu as="div" className="relative -ml-px block">
        <MenuButton className="relative inline-flex items-center rounded-r-md bg-white px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-10 dark:bg-white/10 dark:ring-gray-700 dark:hover:bg-white/20">
          <span className="sr-only">Open options</span>
          <ChevronDownIcon aria-hidden="true" className="size-5" />
        </MenuButton>
        <MenuItems
          transition
          className="absolute right-0 z-10 mt-2 -mr-1 w-56 origin-top-right rounded-md bg-white shadow-lg outline outline-1 outline-black/5 transition data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[enter]:ease-out data-[leave]:duration-75 data-[leave]:ease-in dark:bg-gray-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10"
        >
          <div className="py-1">
            {items.map((item) => (
              <MenuItem key={item.name}>
                <a
                  href={item.href}
                  className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none dark:text-gray-300 dark:data-[focus]:bg-white/5 dark:data-[focus]:text-white"
                >
                  {item.name}
                </a>
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Menu>
    </div>
  )
}
