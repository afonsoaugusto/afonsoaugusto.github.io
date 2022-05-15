# afonsoaugusto.github.io

## Como executar este projeto localmente

```bash
docker run --rm -it --volume="$PWD:/srv/jekyll" -p 4000:4000 jekyll/jekyll /bin/bash -c "chmod a+wx . && jekyll build -V && jekyll s --force_polling --incremental --watch --trace"
```

## Jekyll Themes
