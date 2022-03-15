const initialState = {
  columns: [
    {
      id: '1',
      listId: '1',
      title: 'Books',
      icon: 'book',
    },
    {
      id: '2',
      listId: '1',
      title: 'Movies',
      icon: 'film',
    },
    {
      id: '3',
      listId: '1',
      title: 'Games',
      icon: 'gamepad',
    },
    {
      id: '4',
      listId: '2',
      title: 'Cappuccino',
      icon: 'coffee',
    }
  ],

  cards: [
    { id: '1', columnId: '1', isFavorite: false, title: 'This is Going to Hurt' },
    { id: '2', columnId: '1', isFavorite: false, title: 'Interpreter of Maladies' },
    { id: '3', columnId: '2', isFavorite: false, title: 'Harry Potter' },
    { id: '4', columnId: '2', isFavorite: false, title: 'Star Wars' },
    { id: '5', columnId: '3', isFavorite: false, title: 'The Witcher' },
    { id: '6', columnId: '3', isFavorite: false, title: 'Skyrim' },
    { id: '7', columnId: '4', isFavorite: false, title: 'Make the espresso' },
    { id: '8', columnId: '4', isFavorite: false, title: 'Steam the milk (espresso machine method).' },
    { id: '9', columnId: '4', isFavorite: false, title: 'OR, heat the milk on the stovetop then froth it.' },
    { id: '10', columnId: '4', isFavorite: false, title: 'Serve.' }
  ],

  lists: [
    {
      id: '1',
      title: 'Things to do...',
      description: 'Interesting things I want to check out'
    },
   {
      id: '2',
      title: 'Coffee',
      description: 'How to made coffee'
   }
 ],

  searchString: ''

};

export default initialState;