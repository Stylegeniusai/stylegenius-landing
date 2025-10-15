# UTM Links för StyleGenius Ad Campaigns

Använd dessa länkar i era annonser för att tracka vilken kanal som genererar flest downloads.

## Landing Page Links (använd dessa i era ads)

### Reddit
```
https://stylegenius.app?utm_source=reddit&utm_medium=cpc&utm_campaign=launch_2025
```

### Snapchat
```
https://stylegenius.app?utm_source=snapchat&utm_medium=cpc&utm_campaign=launch_2025
```

### YouTube Shorts
```
https://stylegenius.app?utm_source=youtube&utm_medium=shorts&utm_campaign=launch_2025
```

### Instagram
```
https://stylegenius.app?utm_source=instagram&utm_medium=cpc&utm_campaign=launch_2025
```

### TikTok
```
https://stylegenius.app?utm_source=tiktok&utm_medium=cpc&utm_campaign=launch_2025
```

### Pinterest
```
https://stylegenius.app?utm_source=pinterest&utm_medium=cpc&utm_campaign=launch_2025
```

---

## Hur du ser resultaten i Google Analytics 4

1. Gå till https://analytics.google.com
2. Välj "StyleGenius" property
3. Gå till **Reports → Acquisition → Traffic acquisition**
4. Du ser nu:
   - Vilken källa som ger mest trafik (reddit, tiktok, etc.)
   - Hur många besökare från varje kanal

5. För att se download-klick per kanal:
   - Gå till **Reports → Engagement → Events**
   - Sök efter "download_click"
   - Se vilken källa som genererar flest klick

---

## Event Tracking som är installerad

### Download Events:
- `hero_download_button` - Klick på huvudknappen längst upp
- `app_features_section` - Klick från App Features-sektionen
- `how_it_works_section` - Klick från How It Works-sektionen
- `download_section_app` - Klick från Download-sektionen

### Browser Extension Events:
- `browser_extension_click` - Klick på "For Computer"-knappen

---

## Tips för bästa tracking:

1. **Använd EXAKT dessa länkar** i varje annons
2. **Testa länkarna först** innan ni startar kampanjerna
3. **Vänta 24-48 timmar** för att se första datan i GA4
4. **Jämför conversion rates** mellan kanalerna för att se vilken som är mest lönsam

---

## Exempel på vad du kommer se i GA4:

```
Källa          | Besökare | Download-klick | Conversion Rate
-----------------------------------------------------------
tiktok         | 1,250    | 125           | 10%
instagram      | 890      | 89            | 10%
reddit         | 450      | 68            | 15%
youtube        | 320      | 29            | 9%
snapchat       | 280      | 25            | 9%
pinterest      | 150      | 12            | 8%
```

Detta visar att Reddit har högst conversion rate (15%) trots mindre trafik!
