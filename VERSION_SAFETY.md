# Version Safety and Rollback Workflow

This project uses GitHub for permanent code history and Netlify for quick live-site deploy rollback.

## Current Known Good Versions

- `main`: production branch connected to Netlify.
- `stable-2026-05-24`: stable tag for the current Triple Web Design site.
- `edbc46e`: original Triple Web Studio version before the brand rename.
- `e02dfc6`: Triple Web Design rename commit.

## Fast Live-Site Rollback in Netlify

Use this when the live website is broken and you need the fastest recovery.

1. Open the site in Netlify.
2. Go to `Deploys`.
3. Open an older working deploy.
4. Click `Publish deploy`.

This changes the live site immediately without changing GitHub.

## Safe Code Rollback in Git

Use `git revert` for commits already pushed to GitHub. It creates a new commit that undoes the selected change and keeps history clean.

Undo one commit:

```powershell
git revert <commit-sha>
git push
```

Example, if you ever wanted to undo the brand rename:

```powershell
git revert e02dfc6
git push
```

Return to a stable tag by creating a rollback branch:

```powershell
git switch -c rollback-to-stable stable-2026-05-24
```

Inspect the original version without touching `main`:

```powershell
git switch -c inspect-original edbc46e
```

## Future Change Workflow

Use this before major edits.

1. Create a branch:

```powershell
git switch -c codex/change-description
```

2. Make the change, test locally, then commit:

```powershell
npm.cmd run typecheck
npm.cmd run build
git add -A
git commit -m "Describe the change"
```

3. Push the branch:

```powershell
git push -u origin codex/change-description
```

4. Test the Netlify deploy preview.
5. Merge to `main` only after the preview works.

## Create Stable Checkpoints

After an important working release:

```powershell
git tag stable-YYYY-MM-DD
git push origin stable-YYYY-MM-DD
```

## What To Avoid

- Do not use `git reset --hard` on pushed work unless you intentionally want to discard local changes.
- Do not force-push `main`.
- Do not commit `.env.local`, Stripe secret keys, `.next`, or `node_modules`.

## Safety Checks

Before pushing production changes:

```powershell
git status --short
npm.cmd run typecheck
npm.cmd run build
```
