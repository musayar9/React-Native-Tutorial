### Scroll View

Scroll View React Native'de bir bileşen olup kullanıcıya içeriği kaydırarak (scroll ederek ) görüntüleme imkanı tanır. Bu genellikle, ekrannın sınırlarını aşan büyük veri listeleri uzun metinler veya geniş görüntülerin ekranda yer almasını sağlamak içiin kullanılır.

### Scroll View Ne işe Yarar ?

Normal bir görünüm (View) ekranda ne kadar yer varsa o kadar içerik gösterebilir. Ancak içeriğimiz ekranın boyutlarından daha büyükse, ScrollView kullanarak içeriğin kaydıralark görüntülenmesini sağlayabilirsiniz. Kullanıcılar içeriği yukarı aşağı sola veya sağa kaydırabilirler.

## Temel Kullanım
ScrollView bileşeni, hem dikey (vertical) hem de yatay (horizontal) kaydırmayı destekler. Varsayılan olarak dikey kaydırmayı sağlar, ancak yatay kaydırmayı da etkinleştirebilirsiniz.


```tsx
import React from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>1. İçerik</Text>
      <Text style={styles.text}>2. İçerik</Text>
      <Text style={styles.text}>3. İçerik</Text>
      <Text style={styles.text}>4. İçerik</Text>
      <Text style={styles.text}>5. İçerik</Text>
      <Text style={styles.text}>6. İçerik</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  text: {
    fontSize: 24,
    marginVertical: 20,
  },
});

export default App;

```

## Prop (Özellikler)
``ScrollView`` birçok özelliğe sahiptir. İşte bazı önemli olanları:
- 1. `horizontal`:Kaydırmanın yataymı yoksa dikey mi olacağını belirler

```tsx 
<ScrollView horizontal={true}>

```
Bu özellik true yapılırsa yatay kaydırma etkinleştirilir.

2. ``showsVerticalScrollIndicator``: Dikey kaydırma göstergesinin görünür olup olmadığını belirler.

```tsx
<ScrollView showsVerticalScrollIndicator={false}>

```

3. ``contentContainerStyle:`` Kaydırma içeriğinin stili için kullanılır.

```tsx
<ScrollView contentContainerStyle={{ padding: 20 }}>

```
4. ``onScroll``: Kullanıcı kaydırma yaptığında bir işlev çağırmanıza olanak tanır.

```tsx
<ScrollView onScroll={handleScroll}>

```

5. ``refreshControl``: ScrollView'u aşağı çekerek yenileme işlemi için bir kontrol eklemek amacıyla kullanılır (genellikle bir "refresh" işlemi ile birlikte kullanılır).

### ScrollView Kullanımında Dikkat Edilmesi Gerekenler

1. ``Performans Sorunları: ``Eğer çok büyük bir veri listesi varsa, ScrollView performans sorunlarına yol açabilir, çünkü tüm içerik aynı anda yüklenir ve bellek kullanımı artar. Bunun yerine, performans açısından daha uygun olan FlatList veya SectionList gibi bileşenler kullanılmalıdır.

2. ``İçeriğin Tamamen Görünmesi:`` ScrollView, tüm içeriği kaydırılabilir hale getirdiği için, belirli bileşenlerin ekrandan taşmasını engellemek ve düzgün çalışmasını sağlamak için genellikle flex düzenleri ve height gibi stillerle doğru şekilde yapılandırılmalıdır.

#### Sonuç
React Native'deki ScrollView, kullanıcının içeriği kaydırarak görüntülemesine olanak tanıyan önemli bir bileşendir. Küçük içerik listeleri veya uzun formlar gibi durumlarda oldukça kullanışlıdır, ancak performans sorunlarına yol açmamak için çok büyük listelerde dikkatli kullanılmalıdır.

### TouchableOpacity

React Native'de bir bileşen olup dokunulabilir alanlar oluşturmak için kullanılır. Bu bileşen kullanıcı üzerine tukaldığında (dokunduğund) bir `opacity` (saydamlık) animasyonu oluşturarak görsel geri bildirim sağlar. Özellikle buton veya tıklanabilir alanlar oluşturmak için yaygın olarak tercih edilir.


#### Temel Kullanım

```tsx

import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Alert } from 'react-native';

const App = () => {
  const handlePress = () => {
    Alert.alert("Butona tıkladınız!");
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>Tıkla</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default App;

```

##### Açıklamalar:
- ``TouchableOpacity:`` Dokunulabilir bileşen. Kullanıcı dokunduğunda onPress işlevi tetiklenir ve bileşenin opaklığı azalır, bu da bir tıklanma efekti verir.
- ``onPress``: Butona basıldığında çalıştırılacak işlevdir.
- ``style``: Butonun stili. TouchableOpacity bileşenine stiller uygulayabilirsiniz.
- ``Text``: Butonun içinde gösterilen metin.

#### önemli props (özellikler)

1. `onPress` kullanıcın dokunduğunda çalışacak fonksiyon

```tsx
<TouchableOpacity onPress={handlePress}>

```

2. ``activeOpacity``: Kullanıcının dokunduğu sırada bileşenin saydamlığını ayarlar. Varsayılan olarak 0.2dir (0-1 aralığında değer alır).

```tsx
<TouchableOpacity activeOpacity={0.6}>

```

3. `style`: Bileşenin stilini belirlemek için kullanılır

```tsx
<TouchableOpacity style={styles.button}/>
```

4. `disabled` : Bu prop true olduğunda bileşen tıklanamaz hale gelir ve saydamlığı düşer.

```tsx
<TouchableOpacity disabled={true}/>
```

``activeOpacity`` ile Görsel Geri Bildirim
Kullanıcı tıkladığında bileşenin ne kadar şeffaf olacağını activeOpacity özelliği ile belirleyebilirsiniz:

```tsx
<TouchableOpacity style={styles.button} onPress={handlePress} activeOpacity={0.7}>
  <Text style={styles.buttonText}>Tıkla</Text>
</TouchableOpacity>

```

Bu örnekte, butona dokunulduğunda butonun opaklığı %70 olacak şekilde ayarlanır.

##### Butonun Tıklanmasını Devre Dışı Bırakma (disabled)
Eğer butonun tıklanmasını devre dışı bırakmak isterseniz, disabled özelliğini kullanabilirsiniz:

```tsx
<TouchableOpacity style={styles.button} onPress={handlePress} disabled={true}>
  <Text style={styles.buttonText}>Devre Dışı</Text>
</TouchableOpacity>

```
Bu örnekte buton tıklanamaz hale gelir ve butonun opaklığı azalır, görsel olarak butonun devre dışı olduğu anlaşılır.

``onLongPress``:  buton uzun süre dokunduktan sonra gerçekleştirilecek işlem.

## SafeAreaView

React Native'de ekranın `güvenli alanlarını ` (safe areas) dikkate alarak içeriğin görünür olmasını sağlayan bir bileşendir. Modern mobil cihazlarda (özellikle çentikli ekranlar veya yuvarlatılmış köşelere sahip olanlar) bazı ekran bölgeleri çentik, menü çubuğu durum çubuğu veya home buton alanı gibi unsurlar tarafından kaplanabilir. `SafeAreaView` bu bölgelerden uzak durarak uygulamanın kullanıcı deneyimini iyileştirir.


### Ne İşe Yarar?
SafeAreaView, özellikle iPhone X ve sonrası cihazlarda ortaya çıkan ekranın çentikli (notch) veya yuvarlatılmış köşelerine uygun bir çözüm sunar. Bu sayede içeriğiniz bu alanlara çarpmadan güvenli bir şekilde yerleştirilir ve daha iyi bir görünüm sağlanır.


#### temel kullanım 


```tsx
import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Bu içerik güvenli alanda yer alıyor</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
});

export default App;

```

### Açıklamalar:
- ``SafeAreaView``: İçeriği ekranın güvenli alanlarına göre düzenler. Örneğin, iPhone'daki çentik veya durum çubuğu altında kalan alanları hesaba katarak, içeriği bu alanlardan uzak tutar.

- ``style: ``SafeAreaView'e CSS benzeri stil özellikleri uygulayabilirsiniz.

Güvenli Alanlar Nelerdir?

Güvenli alanlar, cihazın kullanıcıya açık olan ekran alanlarıdır ve şu bölgeleri hesaba katar:

``Çentikler (notch):`` Çentikli ekranlarda bu bölge kullanılmaz.

``Durum Çubuğu:`` Ekranın üst kısmında saat, şarj seviyesi, sinyal gücü gibi göstergelerin olduğu alan.

``Home Bar:`` iPhone X ve sonraki modellerdeki ekranın alt kısmındaki home bar alanı.

### SafeAreaView Kullanımı ve Alternatifleri

``Eski Android Cihazlar veya Normal Ekranlar: ``SafeAreaView, çentiksiz veya klasik ekranlı cihazlarda da çalışır, ancak bu cihazlarda işlevi genellikle fark edilmez.

``Alternatif:`` Eğer tüm cihazlarda içeriği belli bir kenar boşluğu ile yerleştirmek istiyorsanız, padding veya margin özelliklerini kullanabilirsiniz. Ancak SafeAreaView, çentikli ekranlarda bunu otomatik olarak halleder.

#### Performans ve Kullanım Tavsiyeleri
- ``SafeAreaView``, sadece gerekli yerlerde kullanılması gereken bir bileşendir. Genellikle uygulamanızın en dış kapsayıcı bileşeni olarak (örneğin ekranın üst veya alt kısmına sabitlenmiş alanlar için) kullanılır.

- Eğer uygulamanızın her ekranında içeriğin güvenli bir şekilde gösterilmesi gerekiyorsa, bunu SafeAreaView ile sarabilirsiniz.

### Özet
``SafeAreaView``, modern cihazlarda içeriklerin güvenli alanlarda görüntülenmesini sağlayan bir bileşendir. Çentik, durum çubuğu ve yuvarlatılmış köşelere sahip cihazlarda içeriklerin bu alanlara çarpmasını engeller ve kullanıcı deneyimini geliştirir.