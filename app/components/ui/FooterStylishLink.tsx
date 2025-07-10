import React from 'react'

type LinkProps = {
  key: String
  item: String

}

const FooterStylishLink = ( {item }:LinkProps) => {
  return (
    <a
      href="#"
      className="block text-gray-300 hover:text-emerald-500 text-sm transition-colors duration-300 relative group"
      onMouseEnter={(e) => {
        e.currentTarget.style.paddingLeft = '8px';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.paddingLeft = '0px';
      }}
    >
      {item}
      <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-0 h-0.5 bg-emerald-500 group-hover:w-2 transition-all duration-300"></span>
    </a>

  )
}

export default FooterStylishLink