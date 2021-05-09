import React from 'react';
import { render , fireEvent, waitFor, screen, getAllByRole} from '@testing-library/react';
import ProductsLst from './ProductsLst';
import '@testing-library/jest-dom/extend-expect'



test('renders the amount in category message is shown in big amount', () => {
    const { container ,getByText} = render(<ProductsLst category="babies"/>)
    expect(getByText('many products in category')).toBeInTheDocument()
  })


  test('renders the amount in category message is shown in big amount', () => {
    const { container } = render(<ProductsLst category="occasions"/>)
    const message=screen.queryByText('many products in category')
    expect(message).toBeNull()
  })

  
test('renders the amount of products shown', () => {
  const { container } = render(<ProductsLst category="babies"/>)
  expect(container.querySelectorAll('h3').length===7)
})

test('clicking on button',() => {
  const { getByText, container } = render(<ProductsLst category="babies"/>)
  fireEvent.click(getByText('הסתר פריטים שמחירם יקר'))
  expect(container.querySelectorAll('h3').length===1)
})

