import React from 'react'
import '@testing-library/jest-dom/extend-expect';
import * as rtl from "@testing-library/react";
import axios from 'axios'

import App from './App'



// jest.mock('axios', () => {
//   return {
//     get: jest.fn(() => Promise.resolve({
//       data: {
//         message: ['star wars']
//       }
//     })) 
//   }
// })

// test('API call is made', async () => {
//   const wrapper = rtl.render(<App />)

//   await wrapper.findAllByRole()

//   expect(axios.get).toHaveBeenCalled()

// })


test('render title', async () => {
  const wrapper = rtl.render(<App />)

  const title = await wrapper.findByAltText(/logo/i)

  expect(title).toBeVisible()
})

test('click for characters', async () => {
  const wrapper = rtl.render(<App />)
  const luke = await wrapper.findByText(/luke skywalker/i)

  const nextBtn = wrapper.getByText(/next/i)

  rtl.act(() => {
    rtl.fireEvent.click(nextBtn)
  });
  expect((luke)).toBeVisible()
})

test('check for buttons', () => {
  const wrapper = rtl.render(<App />)
  const prev = wrapper.getByText(/previous/i) 

  expect(prev).toBeVisible()
})

test('check for next btn', () => {
  const wrapper = rtl.render(<App />)
  const prev = wrapper.getByText(/next/i) 

  expect(prev).toBeVisible()
})