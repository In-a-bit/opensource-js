# Inabit Open Source Javascript Projects

This is a monorepo Inabit opensource related projects.

## Development

This repo uses [changeset](https://github.com/changesets/changesets) to handle package versioning changes and publishing.

1. Open branch for the change
2. Create a changeset `pnpm -w changeset:create`
3. Add all code and changeset to the branch
4. Open PR
5. Merge PR after all checks have passed

After the PR is merged to `main`, there is a `release` workflow that opens a new PR with bumping the changed packages versions.

After the PR of the bumping of the packages versions is merged, the `release` workflow is activated again and `publish` the packages to Npm.
