## 1. Toggle

### 구현방법과 이유

1. 토글 on,off를 불리언으로 구분하기: 토글버튼은 on과 off 두가지 상태를 가집니다. 상태는 true일때 on, false일때 off상태로 불리언을 주어 구별지었고, 삼항연산자를 이용하여 텍스트가 바뀌도록 처리했습니다.
2. toggle의 UI를 props를 이용하여 다르게 렌더링되도록 처리함: 배경색과 버튼은 색상과 위치만 바뀌므로, 스타일컴포넌트를 이용하여 background로 색상과 flex로 버튼 레이아웃을 달리하여 props값이 바뀌도록 처리했다.
3. onclick시 true는 false가 되고, false는 true가 되도록 처리했습니다.

-   이유
    toggle 창의 경우 on,off 두가지 상태가 존재하므로, 불리언으로 크게 상태변화를 구분지어 주고, 중복되는 컴포넌트(단순배경변화, 약간의 레이아웃변화)는 props로 스타일드 컴포넌트를 이용하여 처리했습니다.

### 어려웠던 점과 해결방법

-   레이아웃 잡기가 생각보다 어려웠습니다. 간격을 처음에 transition으로 조정하려다가 큰 박스에 padding을 주어 처리했습니다.

### 실행방법

토글을 클릭하면, on/off 로 상태가 변화한다.
<br>
<br>
<br>

## 2. Modal

### 구현방법과 이유

1. modalState를 불리언으로 구분하기 : modal 팝업창이 닫혔을때 상태를 useState() 훅을 이용하여, false 값을 줍니다.
2. modalState의 참거짓에 따라 UI다르게 렌더링되도록 하기 : 삼항연산자를 이용해서 modalState가 false일때 Open버튼이 보이도록 하고, true일때 modal참이 팝업되도록 합니다.
3. Close버튼과 Open버튼에 onClick 이벤트를 달아서, 실행시 UI의 상태값이 변하도록(불리언이 바뀌도록) 처리했습니다.
4. 스타일드 컴포넌트를 사용했습니다. : 코드량이 많지않아서 한 파일안에 스크립트와 스타일코드를 같이 작성해도 보기 큰 불편함이 없을 것같다고 판단했습니다. 또한 버튼이 다양해서 CSS로 클래스명을 붙이다보면 헷갈리기도 하는데, 스타일 컴포넌트는 컴포넌트 단위여서 그 불편함을 없앨 수 있었습니다.

-   이유
    모달 창의 경우 모달이뜨고 닫히는 두가지 UI상태가 존재하므로, 상태를 불리언값을 주고 삼항연산자를 이용해서 조건에 따라 UI가 달리 보이도록 해야겠다고 생각했습니다.

### 어려웠던 점과 해결방법

-   모달 팝업되면 배경색만 바꿔주면 되는데, 새로운 스타일 컴포넌트를 작성하는게 불필요한 생성이라고 여겨졌습니다. 스타일컴포넌트의 기능중 상속이 가능하단것을 알아내서, 배경에 color를 직접 설정해서 바뀌도록 만들었습니다.

### 실행방법

1. OpenModal 버튼을 클릭한다. -> 모달창이 팝업되고, 배경이 흐려진다.
2. X 버튼을 클릭한다. -> 모달창이 닫히고, 기본배경으로 돌아온다.

<br>
<br>
<br>

## 3. Tab

### 구현방법과 이유

1. 불리언 상태값을 이용, tab을 클릭할때 상태를 변화시켜주기 :
    - useState훅으로 불리언을 이용해, 현 상태에 반대가 되는 상태를 클릭할때 마다 탭한 박스의 디자인과 문구를 업데이트 해주는 함수를 만들었습니다.
    - 탭마다 개별적으로 useState훅을 사용하여, 해당 함수를 실행할시에 다른 탭 박스의 state들은 비활성화 되도록 예외를 처리했습니다.
2. tab박스의 배경색과 글자색 변화 : props를 이용하여, 배경과 글자색을 바꿔주었습니다.

### 어려웠던 점과 해결방법

-   탭state를 한개만 이용해서 세가지 조건을 변화시키고 싶었는데, 잘 되지 않았고 오히려 코드가 점점 복잡해 지는것 같았습니다. 그래서 그냥 state를 세가지로 나눈후, 각각상태에 불리언을 주고 함수로 그들을 묶어주는 형식으로 처리했습니다.
-   전체 박스를 보면 맨앞에 공간이 있는데, flex만 이용하면 만들 수 없는 디자인인것 같아서, transform을 주어 위치를 강제적으로 이동시켰습니다.

### 실행방법

1. 탭 버튼을 누른다.
2. 문장이 변한것을 확인한다.

<br>
<br>
<br>

## 4. Tag

### 구현방법과 이유

1. 태그 생성하기 :

    - tagList 배열 만들기 : 키-벨류로 text와 id를 가지고 있는 객체배열(json) 만든다.
    - handleCreate함수 만들기 : input에 입력한 값(e.target.value)은 setText훅을 이용하여 text값을 업데이트 시킨다. 업데이트된 text값은 슷자로 id값을 부여해서, tagList 배열에 넣는다. 엔터키이벤트(onKeyPress)가 일어날때마다 위 동작이 실행된다.
    - map을 이용해서 tagList데이터를 뿌려주기

2. 태그 제거하기 :
    - handleRemove 함수 만들기 : 태그가 생성될때 id가 부여되므로, onClick이 된 태그의 id와 다른 tagList에 있는 id값들만 남기도록 filter를 한다.
    - onClick시 해당 함수가 실행되도록 한다. map함수를 돌렸으니, 해당 엘리먼트를 handleRemove가 시행될때 파라미터로 넣어준다.

### 어려웠던 점과 해결방법

-   처음에 삭제를 state만으로 해결해 보려고 했다. 결국 id값을 주고, tagList의 형태를 json형식으로 바꿈으로써 해결했다.
-   삭제 조건을 if형식으로 줘야하나 고민하다가, tagList의 경우 배열이고 filter를 이용해서 같지 않은 것들만 남긴다는 아이디어를 얻어서 해결했다.

### 실행방법

1. 인풋창에 값을 입력한다.
2. 태그가 만들어진다.
3. x버튼을 클릭한다.
4. 해당태그가 지워진다.

<br>
<br>
<br>

## 5. AutoComplete

<br>
<br>
<br>

## 6. ClickEdit
