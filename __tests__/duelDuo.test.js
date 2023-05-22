const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
});

describe('Game UI Tests', () => {
  
  it('should display the "choices" div when the Draw button is clicked', () => {
    
    const drawButton = document.getElementById('draw-button'); 
    drawButton.click();

    
    const choicesDiv = document.getElementById('choices'); 
    expect(choicesDiv.style.display).not.toBe('none');
  });

  
  it('should display the "player-duo" div when an "Add to Duo" button is clicked', () => {
    
    const addToDuoButton = document.getElementById('add-to-duo-button'); 
    addToDuoButton.click();

    
    const playerDuoDiv = document.getElementById('player-duo'); 
    expect(playerDuoDiv.style.display).not.toBe('none');
  });
});