```js
const people = [
  {
    id: 1,
    name: 'Annie Badger',
    institution: 'A University',
    subjectAreas: ['Cell biology'],
  },
  {
    id: 2,
    name: 'Bobby Badger',
    institution: 'B College',
    subjectAreas: ['Biochemistry and chemical biology'],
  },
  {
    id: 3,
    name: 'Chastity Badger',
    institution: 'C Institute',
    subjectAreas: ['Ecology'],
  },
  {
    id: 4,
    name: 'Dave Badger',
    institution: 'D Research Lab',
    subjectAreas: ['Neuroscience', 'Pumpkins', 'Chaffinches'],
  },
]
;<PeoplePicker
  initialSelection={[people[1]]}
  minSelection={2}
  maxSelection={3}
  onSubmit={selection => console.log(selection)}
  people={people}
/>
```
