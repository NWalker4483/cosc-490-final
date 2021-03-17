
rm -rf server/static # Remove existing frontend build
mkdir -p server/static # Remake Folder 
mv frontend/dist/frontend/ server/static # Move new build into appropriate place
rm -rf frontend # Remove front end code to save space
mv server/* . # Move server files to root so that glitch can find them
rm -rf server # remove leftover folder