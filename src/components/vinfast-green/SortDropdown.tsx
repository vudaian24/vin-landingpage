'use client'

import { useState } from 'react'

const sortOptions = [
  'Thứ tự mặc định',
  'Thứ tự theo mức độ phổ biến',
  'Thứ tự theo điểm đánh giá',
  'Mới nhất'
]

interface SortDropdownProps {
  onChange?: (value: string) => void
}

export default function SortDropdown({ onChange }: SortDropdownProps) {
  const [selected, setSelected] = useState<string>(sortOptions[0])

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    setSelected(value)
    onChange?.(value)
  }

  return (
    <>
      <label htmlFor="sort-options-select" className="sr-only">Sắp xếp theo</label>
      <select
        id="sort-options-select"
        className="border border-gray-300 rounded px-2 py-2 text-sm focus:outline-none"
        value={selected}
        onChange={handleChange}
      >
        {sortOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  )
}
