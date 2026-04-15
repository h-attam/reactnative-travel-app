# Aspen Seyahat Uygulaması

Aspen, modern seyahat tutkunları için tasarlanmış, kullanıcı dostu ve estetik bir mobil uygulama arayüzüdür. Bu proje, React Native kullanılarak geliştirilmiş olup modern tasarım prensiplerini ve performanslı bir kullanıcı deneyimini hedefler.

## Proje Hakkında

Uygulama, kullanıcıların farklı kategorilerde (Oteller, Yemek, Macera vb.) seyahat rotaları keşfetmesini, popüler mekanları incelemesini ve beğendikleri yerleri kaydetmesini sağlar. Minimalist tasarımı ve akıcı navigasyon yapısı ile modern bir seyahat asistanı deneyimi sunar.

## Ekran Görüntüsü

<img src="/assets/Screen-2026-04-16-020203.gif" width="100" />

## Temel Özellikler

- Dinamik Kategori Filtreleme: Lokasyon, Otel, Yemek, Macera ve Aktiviteler bazlı anlık içerik güncelleme.
- Gelişmiş Navigasyon: Bottom Tab Navigation ile ana sayfa, yer imleri, bildirimler ve profil sekmeleri arasında hızlı geçiş.
- Bookmark (Kaydetme) Sistemi: Context API kullanılarak geliştirilen, mekanların favorilere eklenmesini ve listelenmesini sağlayan global state yönetimi.
- Detaylı Mekan Sayfaları: Her mekan için yüksek kaliteli görseller, derecelendirmeler, olanaklar ve rezervasyon seçenekleri.
- Bildirim Arayüzü: Kullanıcıyı bilgilendiren estetik ve kategorize edilmiş bildirim listesi.
- Profil Yönetimi: Kullanıcı bilgilerinin ve uygulama ayarlarının yönetilebileceği arayüz.

## Kullanılan Teknolojiler

Bu projenin geliştirilmesinde aşağıdaki teknolojiler ve kütüphaneler kullanılmıştır:

- React Native (v0.85.1): Çapraz platform mobil uygulama geliştirme çerçevesi.
- TypeScript: Güvenli tip yönetimi ve daha sürdürülebilir kod yapısı için.
- NativeWind: Stil yönetimi ve responsive tasarım için modern CSS yaklaşımı.
- React Navigation: Uygulama içi sayfa geçişleri ve tab yönetimi.
  - @react-navigation/native-stack
  - @react-navigation/bottom-tabs
- React Native Vector Icons: Feather ve FontAwesome ikon setleri ile zengin görsel dil.
- React Context API: Uygulama genelinde paylaşılan verilerin (Bookmarks vb.) yönetimi.

## Kurulum ve Çalıştırma

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyebilirsiniz:

1. Depoyu klonlayın:

   ```bash
   git clone [repo-url]
   ```

2. Bağımlılıkları yükleyin:

   ```bash
   npm install
   ```

3. iOS için Pod'ları yükleyin:

   ```bash
   cd ios && pod install && cd ..
   ```

4. Uygulamayı başlatın:
   - iOS için: `npm run ios`
   - Android için: `npm run android`

## Notlar

Uygulama, React Native CLI (Pure React Native) kullanılarak geliştirilmiştir ve Expo içermez. İkonların ve fontların doğru görüntülenmesi için iOS tarafında Xcode proje yapılandırması tamamlanmıştır.
