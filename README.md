# lodash-testcode

## 프로젝트 셋업

- `pnpm` 사용해주세요!

```bash
pnpm install

# 테스트 실행
pnpm test

# 테스트 실행 (watch 모드)
pnpm test:watch
```

## 스터디 진행

1. 매주 테스트 대상 함수를 선정합니다.
2. `study/<본인 이름>/<스터디 순번>` feature 브랜치를 생성합니다. (ex. `study/shioo.park/1`)
3. `tests/<본인 이름>/<스터디 순번>.<테스트 대상 파일명>.test.ts` 파일을 생성합니다.
4. `pnpm test:watch` 명령어로 테스트를 실행합니다.
5. 작성한 테스트 코드를 commit하고 PR을 생성합니다.

## 테스트 코드 작성 스타일

`describe`로 테스트 묶음(suite)을 만들고, `it`으로 테스트 케이스를 작성합니다.

```typescript
describe('테스트 대상 함수명', () => {
  it('테스트 케이스 설명', () => {
    // 테스트 코드
  });
});
```

원하는 만큼 `describe`와 `it`을 중첩해서 사용해도 됩니다.

> 참고로, [`it` 대신 `test`를 사용해도 됩니다.](https://jestjs.io/docs/api#testname-fn-timeout)

Jest 공식 문서를 잘 보고, 가능한 한 다양한 기능을 사용해봐요!
