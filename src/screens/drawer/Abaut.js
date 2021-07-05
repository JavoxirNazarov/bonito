import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, ScrollView, ImageBackground} from 'react-native';
import Background from '../../assets/Basket/Background.png';
import Header from '../../components/List/Header';
import {strings} from '../../Constants/localization';

export default function About() {
  return (
    <ImageBackground
      imageStyle={{resizeMode: 'cover'}}
      source={Background}
      style={styles.continer}>
      <Header text={strings.DWAWER.ABAUT} />

      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={styles.innerContainer}>
        <Text style={{fontSize: 18, marginBottom: 20, padding: 10}}>
          {strings.getLanguage() == 'ru' ? (
            <>
              Наша компания является одним из лидеров в текстильной
              промышленности со своими известными брендами 'BONITO KIDS' и
              'BONITO JEANS'. Высококачественная отечественная продукция за
              короткое время хорошо зарекомендовала себя и достигла широкого
              признания не только на внутреннем рынке страны, но и за его
              пределами. {'\n'}
              {'\n'} Текстильное предприятие «Bonito» было основано в 2011 году.
              И уже на сегодняшний день компанию составляют более 1500 человек
              только производственного состава с общей площадью территории 17
              000 кв. метров. За эти несколько лет усердного и плодотворного
              труда, наша команда добилась колоссального успеха по пошиву
              детского текстиля и трикотажа. Изделия от «Bonito» отличаются
              высоким качеством используемого материала, а также индивидуальным
              покроем. В производстве предпочтительно используется только 100%
              хлопчатобумажные ткани. Каждая модель одежды, с учётом возрастной
              категории и интересов, эксклюзивно разрабатывается дизайнерами и
              модельерами предприятия. Ежегодно «Bonito» выпускает более 5 000
              000 единиц изделий, но это не предел. {'\n'}
              {'\n'}«Мы стоим на пути развития, и нам есть, куда стремится.
              «Bonito» хоть и молодая, но стремительно развивающаяся компания.
              Сегодня, мы поставляем нашу продукцию во все страны СНГ. С нами
              сотрудничают, и нам доверяют».{'\n'}
              {'\n'} В 2017 году мы запустили в производство джинсовую одежду,
              как для детей, так и для взрослых. {'\n'}
              {'\n'}Цель нашей компании {'\n'}
              {'\n'} Основная цель деятельности нашей компании - это обеспечить
              потребителя стильной, удобной и качественной одеждой из
              натурального сырья по доступным ценам.{'\n'}
              {'\n'} Чтобы достичь этой цели мы работаем только с ведущими
              поставщиками материалов и комплектующих, жестко контролируем
              производственный процесс на соответствие всем стандартам,
              постоянно повышаем квалификацию своих сотрудников. Использование
              современных передовых технологий и качественных материалов в
              производстве одежды позволяет изготавливать качественную и
              комфортную одежду.
            </>
          ) : (
            <>
              Kompaniyamiz taniqli 'BONITO KIDS' va 'BONITO JEANS' brendlari
              bilan tekstil sanoatining etakchilaridan biri hisoblanadi. Qisqa
              vaqt ichida yuqori sifatli mahsulotlar nafaqat mamlakat ichki
              bozorida, balki chet ellarda ham keng e'tirofga erishdilar.{'\n'}
              {'\n'}
              "BONITO KIDS" kompaniyasi 2011 yilda tashkil etilgan. Bugungi
              kunda kompaniya 1500 dan ortiq kishidan iborat bo'lib, umumiy
              maydoni 17000 kvadrat metr bo'lgan ishlab chiqarish xududiga ega.
              Ushbu bir necha yillik mehnat va samarali mehnat davomida jamoamiz
              chaqaloqlardan boshlab 15 yoshgacha bolgan bolajonlar trikotaj
              kiyimlarini tikishda ulkan yutuqlarga erishdi. "BONITO KIDS"
              mahsulotlari ishlatilgan materiallarning yuqori sifati, shuningdek
              individual kesilganligi bilan ajralib turadi. Ishlab chiqarishda
              faqat 100% paxta matolari ishlatiladi. Kiyimlarning har bir
              modeli, yosh toifasi va qiziqishlarini hisobga olgan holda, faqat
              korxona dizaynerlari va modelerlari tomonidan ishlab chiqilgan.
              "BONITO KIDS" kompaniyasi har yili 5 000 000 dan ortiq mahsulot
              ishlab chiqaradi, ammo bu chegara emas.{'\n'}
              {'\n'}
              «Biz rivojlanish yo'lidamiz va biz intilayotgan manzilga egamiz.
              "Bonito Kids" bu yosh, ammo tez rivojlanayotgan kompaniya. Bugungi
              kunda biz o'z mahsulotimizni MDHning barcha mamlakatlariga etkazib
              beramiz. Ular biz bilan hamkorlik qiladi va bizga ishonadi. " 2017
              yilda biz bolalar uchun ham, kattalar uchun ham djins materialidan
              tayyorlanadigan kiyimlarini ham ishga tushirdik.{'\n'}
              {'\n'}
              Kompaniyamizning asosiy maqsadi iste'molchilarni tabiiy
              xomashyodan tikilgan zamonaviy, qulay va sifatli kiyim-kechaklar
              bilan ta'minlashdir. Ushbu maqsadga erishish uchun biz faqat
              etakchi materiallar va butlovchi qismlar etkazib beruvchilar bilan
              ishlaymiz, ishlab chiqarish jarayonini barcha standartlarga
              muvofiqligini qat'iy nazorat qilamiz, biz xodimlarimizning
              malakasini doimiy ravishda oshirib boramiz. Kiyim-kechak ishlab
              chiqarishda zamonaviy ilg'or texnologiyalar va yuqori sifatli
              materiallardan foydalanish bizga sifatli va qulay kiyim-kechaklar
              ishlab chiqarish imkonini beradi.
            </>
          )}
        </Text>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    position: 'relative',
  },
  innerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
