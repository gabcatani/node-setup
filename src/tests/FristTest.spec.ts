import { User } from '@models/User'

test('it should be ok', () => {
  const user = new User()

  user.name = 'Gabriel'

  expect(user.name).toEqual('Gabriel')
})
