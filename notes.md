## Deliverables
1. [x] Fetch all dog data
2. [x] Display all dog name in bar in spans
3. [x] Clicking dog span displays dog details (see below)
4. Clicking button on detail toggles "Good/Bad Dog"
### Bonus
5. Clicking on "Filter" button displays only good dogs in bar

### Data
- source: db.json (json-server)
- endpoints: http://localhost:3000/pups
    - http://localhost:3000/pups/:id
- shape:
```javascript
    {
      "id": 1,
      "name": "Mr. Bonkers",
      "isGoodDog": true,
      "image": "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_1.jpg"
    }
```

### Display format
- in bar: `<span>Mr. Bonkers</span>`
- in detail: 
```HTML
  <img src=dog_image_url>
  <h2>Mr. Bonkers</h2>
  <button>Good Dog!</button>
 ```