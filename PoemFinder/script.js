const poemList = [
  "وقت طرب خوش یافتم آن دلبر طناز را   ساقی بیار آن جام می، مطرب بزن آن ساز را",
  "امشب که بزم عارفان از شمع رویت روشن است   آهسته تا نبود خبر رندان شاهدباز را",
  "دوش ای پسر می خورده‌ای چشمت گواهی می‌دهد   باری حریفی جو که او مستور دارد راز را",
  "سویِ منِ وحشی صفتِ عقل رمیده   آهو رَوشی، کبک خرامی، نفرستاد",
  "به خَطُّ و خالِ گدایان مده خزینهٔ دل   به دستِ شاهوَشی دِه که محترم دارد",
  "مرادِ دل ز که پرسم؟ که نیست دلداری   که جلوهٔ نظر و شیوهٔ کرم دارد",
  "رحم آر بر دل من کز مهر روی خوبت   شد شخص ناتوانم باریک چون هلالی",
];

function poet(verce) {
  const space = "   ";
  const spaceIndex = verce.search(space);
  const lastLetterOfFirstDeath = verce.slice(spaceIndex - 1, spaceIndex);
  const lastLetterOfSecondDeath = verce.slice(-1);
  const result = poemList.find((poem) => {
    if (lastLetterOfSecondDeath == poem[0]) {
      return poem;
    } else if (lastLetterOfFirstDeath == poem[0]) {
      return poem;
    }
  });

  if (result) return result;
  else return "شعر مدنظر شما یافت نشد";
}

console.log(poet("آن کس که به دست، جام دارم   سلطانیِ جَم، مُدام دارد"));