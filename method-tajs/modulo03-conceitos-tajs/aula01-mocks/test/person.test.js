import { describe, it, expect, jest } from '@jest/globals'
import Person from '../src/person.js'

describe('#Person Suite', () => {
  describe('#validate', () => {
    it('should throw if the name is not present', () => {
      // mock é a entrada necessária pra que o teste funcione
      const mockInvalidPerson = {
        name: '',
        cpf: '123.123.123-00'
      }

      expect(() => Person.validate(mockInvalidPerson)).toThrow(new Error('Name is required'))
    })

    it('should throw if the cpf is not present', () => {
      // mock é a entrada necessária pra que o teste funcione
      const mockInvalidPerson = {
        name: 'Batman',
        cpf: ''
      }

      expect(() => Person.validate(mockInvalidPerson)).toThrow(new Error('cpf is required'))
    })

    it('should not throw if person is valid', () => {
      // mock é a entrada necessária pra que o teste funcione
      const mockInvalidPerson = {
        name: 'Batman',
        cpf: '123.123.123-00'
      }

      expect(() => Person.validate(mockInvalidPerson))
        .not
        .toThrow()
    })
  })

  describe('#Format', () => {
    // parte do principio que os dados já foram validados
    it('should format the name and CPF', () => {
      // Arrange = Prepara
      const mockPerson = {
        name: 'Goku super sayan',
        cpf: '000.999.222-11'
      }
      // ACT = Executar
      const formatterPerson = Person.format(mockPerson)

      // Assert = Validar
      const expected = {
        name: 'Goku',
        cpf: '00099922211',
        lastName: 'super sayan'
      }
      expect(formatterPerson).toStrictEqual(expected)
    })

  })

  describe('#Process', () => {
    it('should process a valid person', () => {
      // [TIP] - Não retestar o que já foi testado

      // Este método faz mais sentido quando se tem interações externas

      // MOcks são simulações de funções pra testar comportamento

      // Arrange
      const mockPerson = {
        name: 'Natasha Romanoff',
        cpf: '123.123.123-00'
      }
      jest
        .spyOn(Person, Person.validate.name)
        .mockReturnValue()
        // .mockImplementation(() => {
        //   throw new Error("OOps!")
        // })

      jest.spyOn(Person, Person.format.name).mockReturnValue({
        cpf: '123.123.123-00',
        name: 'Natasha',
        lastName: 'Romanoff'
      })

      // Act
      const result = Person.process(mockPerson)

      // Assert
      expect(result).toStrictEqual('ok')
    })
  })
})