class Hero {
  constructor(name, gender, blood, realBlood, blue, damage) {
    this.name = name;
    this.gender = gender;
    this.blood = blood;
    this.realBlood = realBlood;
    this.blue = blue;
    this.damage = damage;
  }
  // 攻击方法
  attack(enemy) {
    const { damage } = this;
    enemy.realBlood = enemy.realBlood - damage;
  }s
  showMessage() {
    console.log(`${this.name}生命:${this.realBlood}/${this.blood}`);
  }
}
const chuge = new Hero('楚歌', 'male', 1000, 1000, 2000, 250);
const zhangyao = new Hero('张瑶', 'female', 2000, 2000, 5000, 500);

chuge.attack(zhangyao);
chuge.attack(zhangyao);
chuge.attack(zhangyao);
zhangyao.attack(chuge);

chuge.showMessage();
zhangyao.showMessage();
for(let prop in chuge) {
  console.log(prop)
}