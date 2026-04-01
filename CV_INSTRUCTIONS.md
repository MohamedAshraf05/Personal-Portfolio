# CV/Resume Setup Instructions

## How to Add Your CV PDF

To enable the CV download functionality, you need to add your PDF file to the public directory:

### Steps:

1. **Prepare your CV PDF file**
   - Make sure your CV is in PDF format
   - Recommended naming: `Mohamed_Ashraf_CV.pdf`

2. **Add to the project**
   - Place your PDF file in the `/public` directory of your project
   - The file path should be: `/public/Mohamed_Ashraf_CV.pdf`

3. **File location**
   ```
   your-project/
   ├── public/
   │   └── Mohamed_Ashraf_CV.pdf  <-- Place your PDF here
   ├── src/
   │   └── app/
   └── ...
   ```

4. **Verify the download works**
   - The download buttons in both the Hero section and Contact section will automatically work once the PDF is placed in the public directory
   - When clicked, the file will be downloaded with the name: `Mohamed_Ashraf_Abd_El-Gaber_CV.pdf`

## Customizing the CV File Name

If you want to use a different file name, update the following files:

### Hero.tsx (line 27)
```typescript
link.href = '/your-custom-filename.pdf';
```

### Contact.tsx (line 10)
```typescript
link.href = '/your-custom-filename.pdf';
```

## Note
Make sure the PDF file is optimized for web (compressed) to ensure fast download times.
