import { redirect } from 'next/navigation'

export default function NotFound() {
  // just redirect to home page
  redirect('/')
}
