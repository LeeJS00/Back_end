# 2020 포카전 미궁 홈페이지 백엔드 API 문서

## 목차 

1. 이미지 접근 API 
2. 각 문제 인증 API 
3. 미궁을 성공한 유저 정보 저장 API 

### 1 이미지 접근 API 

{% api-method method="get" host="/img/" path="xx-y.png " %}
{% api-method-summary %}
xx번 문제의 y번째 이미지 접근 
{% endapi-method-summary %}

{% api-method-description %}
7-1, 10-1, 17-1, 21-1, 23-1, 24-1, 25-1, 25-2, 26-1, 28\_2-1, 30\_4-1, 32\_2-1, 37\_2-1, 37\_4-1  
위의 번호를 가지는 문제들의 이미지에 접근할 수 있다.  
  
예\) http://locathost:3000/img/10-1.png
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-path-parameters %}
{% api-method-parameter name="img name" type="string" required=false %}
/img/xx-y.png 
{% endapi-method-parameter %}
{% endapi-method-path-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}
 이미지가 출력된다 
{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

### 2 각 문제 인증 API

{% api-method method="post" host="/" path="ans" %}
{% api-method-summary %}
xx번 문제의 체점 
{% endapi-method-summary %}

{% api-method-description %}
문제의 식별번호와 사용자가 입력한 답안을 json 형태로 입력받는다.  
만약 답안이 맞으면 식별 코드를 제공하고 틀리다면 "/"를 출력한다.  
예\) /lnNK99G0dl4dZYJUbzYEJwcuNklhwzUmZkyIvOidV4uBr97Y64Z6gcsLwKDgkZbo4sotdjZkvmQuDwcKEUMJNA==  
  
\*\* request  body 예제 \(json 형\) \*\*  
{  
   "pid": "37\_4",  
   "input": "POKA2020"  
}
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="pid" type="string" required=false %}
 문제의 식별번호 입력 
{% endapi-method-parameter %}

{% api-method-parameter name="input" type="string" required=false %}
사용자가 입력한 답안 입력 
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```
/lnNK99G0dl4dZYJUbzYEJwcuNklhwzUmZkyIvOidV4uBr97Y64Z6gcsLwKDgkZbo4sotdjZkvmQuDwcKEUMJNA==
```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

### 3 미궁을 성공한 유저 정보 저장 API

{% api-method method="post" host="/end\_user" path=" " %}
{% api-method-summary %}
유저 정보를 서버 db에 저장 
{% endapi-method-summary %}

{% api-method-description %}
http request body로 정보가 넘어가며,  
유저의 이름, 학번, 연락처가 입력 시간과 함께 db에 저장된다.  
  
\*\*  request body 예시 \(json 형\) \*\*  
{   
    "name": "조은찬",   
    "id": "20180638",   
    "phone": "01023669029"  
}
{% endapi-method-description %}

{% api-method-spec %}
{% api-method-request %}
{% api-method-body-parameters %}
{% api-method-parameter name="name" type="string" required=false %}
xxx 예\) 조은찬 
{% endapi-method-parameter %}

{% api-method-parameter name="id" type="string" required=false %}
20xxxxxx 예\) 20180638
{% endapi-method-parameter %}

{% api-method-parameter name="phone" type="string" required=false %}
010xxxxxxxx 예\) 01023669029
{% endapi-method-parameter %}
{% endapi-method-body-parameters %}
{% endapi-method-request %}

{% api-method-response %}
{% api-method-response-example httpCode=200 %}
{% api-method-response-example-description %}

{% endapi-method-response-example-description %}

```

```
{% endapi-method-response-example %}
{% endapi-method-response %}
{% endapi-method-spec %}
{% endapi-method %}

