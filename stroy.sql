--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.7
-- Dumped by pg_dump version 9.6.7

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: auth_group; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE auth_group (
    id integer NOT NULL,
    name character varying(80) NOT NULL
);


ALTER TABLE auth_group OWNER TO stroyshop;

--
-- Name: auth_group_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE auth_group_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE auth_group_id_seq OWNER TO stroyshop;

--
-- Name: auth_group_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE auth_group_id_seq OWNED BY auth_group.id;


--
-- Name: auth_group_permissions; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE auth_group_permissions (
    id integer NOT NULL,
    group_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE auth_group_permissions OWNER TO stroyshop;

--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE auth_group_permissions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE auth_group_permissions_id_seq OWNER TO stroyshop;

--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE auth_group_permissions_id_seq OWNED BY auth_group_permissions.id;


--
-- Name: auth_permission; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE auth_permission (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    content_type_id integer NOT NULL,
    codename character varying(100) NOT NULL
);


ALTER TABLE auth_permission OWNER TO stroyshop;

--
-- Name: auth_permission_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE auth_permission_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE auth_permission_id_seq OWNER TO stroyshop;

--
-- Name: auth_permission_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE auth_permission_id_seq OWNED BY auth_permission.id;


--
-- Name: django_admin_log; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE django_admin_log (
    id integer NOT NULL,
    action_time timestamp with time zone NOT NULL,
    object_id text,
    object_repr character varying(200) NOT NULL,
    action_flag smallint NOT NULL,
    change_message text NOT NULL,
    content_type_id integer,
    user_id integer NOT NULL,
    CONSTRAINT django_admin_log_action_flag_check CHECK ((action_flag >= 0))
);


ALTER TABLE django_admin_log OWNER TO stroyshop;

--
-- Name: django_admin_log_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE django_admin_log_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE django_admin_log_id_seq OWNER TO stroyshop;

--
-- Name: django_admin_log_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE django_admin_log_id_seq OWNED BY django_admin_log.id;


--
-- Name: django_content_type; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE django_content_type (
    id integer NOT NULL,
    app_label character varying(100) NOT NULL,
    model character varying(100) NOT NULL
);


ALTER TABLE django_content_type OWNER TO stroyshop;

--
-- Name: django_content_type_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE django_content_type_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE django_content_type_id_seq OWNER TO stroyshop;

--
-- Name: django_content_type_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE django_content_type_id_seq OWNED BY django_content_type.id;


--
-- Name: django_migrations; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE django_migrations (
    id integer NOT NULL,
    app character varying(255) NOT NULL,
    name character varying(255) NOT NULL,
    applied timestamp with time zone NOT NULL
);


ALTER TABLE django_migrations OWNER TO stroyshop;

--
-- Name: django_migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE django_migrations_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE django_migrations_id_seq OWNER TO stroyshop;

--
-- Name: django_migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE django_migrations_id_seq OWNED BY django_migrations.id;


--
-- Name: django_session; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE django_session (
    session_key character varying(40) NOT NULL,
    session_data text NOT NULL,
    expire_date timestamp with time zone NOT NULL
);


ALTER TABLE django_session OWNER TO stroyshop;

--
-- Name: main_banner; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE main_banner (
    id integer NOT NULL,
    "order" integer NOT NULL
);


ALTER TABLE main_banner OWNER TO stroyshop;

--
-- Name: main_banner_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE main_banner_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE main_banner_id_seq OWNER TO stroyshop;

--
-- Name: main_banner_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE main_banner_id_seq OWNED BY main_banner.id;


--
-- Name: main_banner_translation; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE main_banner_translation (
    id integer NOT NULL,
    language_code character varying(15) NOT NULL,
    name character varying(60) NOT NULL,
    slug character varying(60) NOT NULL,
    image character varying(100) NOT NULL,
    master_id integer
);


ALTER TABLE main_banner_translation OWNER TO stroyshop;

--
-- Name: main_banner_translation_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE main_banner_translation_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE main_banner_translation_id_seq OWNER TO stroyshop;

--
-- Name: main_banner_translation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE main_banner_translation_id_seq OWNED BY main_banner_translation.id;


--
-- Name: main_menu; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE main_menu (
    id integer NOT NULL,
    "order" integer NOT NULL
);


ALTER TABLE main_menu OWNER TO stroyshop;

--
-- Name: main_menu_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE main_menu_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE main_menu_id_seq OWNER TO stroyshop;

--
-- Name: main_menu_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE main_menu_id_seq OWNED BY main_menu.id;


--
-- Name: main_menu_translation; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE main_menu_translation (
    id integer NOT NULL,
    language_code character varying(15) NOT NULL,
    name character varying(60) NOT NULL,
    slug character varying(60) NOT NULL,
    master_id integer
);


ALTER TABLE main_menu_translation OWNER TO stroyshop;

--
-- Name: main_menu_translation_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE main_menu_translation_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE main_menu_translation_id_seq OWNER TO stroyshop;

--
-- Name: main_menu_translation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE main_menu_translation_id_seq OWNED BY main_menu_translation.id;


--
-- Name: main_static; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE main_static (
    id integer NOT NULL
);


ALTER TABLE main_static OWNER TO stroyshop;

--
-- Name: main_static_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE main_static_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE main_static_id_seq OWNER TO stroyshop;

--
-- Name: main_static_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE main_static_id_seq OWNED BY main_static.id;


--
-- Name: main_static_translation; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE main_static_translation (
    id integer NOT NULL,
    language_code character varying(15) NOT NULL,
    name character varying(60) NOT NULL,
    slug character varying(60) NOT NULL,
    image character varying(100),
    body text NOT NULL,
    master_id integer
);


ALTER TABLE main_static_translation OWNER TO stroyshop;

--
-- Name: main_static_translation_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE main_static_translation_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE main_static_translation_id_seq OWNER TO stroyshop;

--
-- Name: main_static_translation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE main_static_translation_id_seq OWNED BY main_static_translation.id;


--
-- Name: products_brands; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE products_brands (
    id integer NOT NULL,
    name character varying(60) NOT NULL,
    logo character varying(100) NOT NULL,
    category_id integer
);


ALTER TABLE products_brands OWNER TO stroyshop;

--
-- Name: products_brands_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE products_brands_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE products_brands_id_seq OWNER TO stroyshop;

--
-- Name: products_brands_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE products_brands_id_seq OWNED BY products_brands.id;


--
-- Name: products_category; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE products_category (
    id integer NOT NULL,
    "order" integer NOT NULL,
    lft integer NOT NULL,
    rght integer NOT NULL,
    tree_id integer NOT NULL,
    mptt_level integer NOT NULL,
    parent_id integer,
    CONSTRAINT products_category_lft_check CHECK ((lft >= 0)),
    CONSTRAINT products_category_mptt_level_675133a8_check CHECK ((mptt_level >= 0)),
    CONSTRAINT products_category_rght_check CHECK ((rght >= 0)),
    CONSTRAINT products_category_tree_id_check CHECK ((tree_id >= 0))
);


ALTER TABLE products_category OWNER TO stroyshop;

--
-- Name: products_category_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE products_category_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE products_category_id_seq OWNER TO stroyshop;

--
-- Name: products_category_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE products_category_id_seq OWNED BY products_category.id;


--
-- Name: products_category_translation; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE products_category_translation (
    id integer NOT NULL,
    language_code character varying(15) NOT NULL,
    name character varying(60) NOT NULL,
    master_id integer,
    slug character varying(50) NOT NULL
);


ALTER TABLE products_category_translation OWNER TO stroyshop;

--
-- Name: products_category_translation_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE products_category_translation_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE products_category_translation_id_seq OWNER TO stroyshop;

--
-- Name: products_category_translation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE products_category_translation_id_seq OWNED BY products_category_translation.id;


--
-- Name: products_color; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE products_color (
    id integer NOT NULL,
    color character varying(18) NOT NULL
);


ALTER TABLE products_color OWNER TO stroyshop;

--
-- Name: products_color_translation; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE products_color_translation (
    id integer NOT NULL,
    language_code character varying(15) NOT NULL,
    name character varying(60) NOT NULL,
    master_id integer
);


ALTER TABLE products_color_translation OWNER TO stroyshop;

--
-- Name: products_color_translation_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE products_color_translation_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE products_color_translation_id_seq OWNER TO stroyshop;

--
-- Name: products_color_translation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE products_color_translation_id_seq OWNED BY products_color_translation.id;


--
-- Name: products_product; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE products_product (
    id integer NOT NULL,
    name character varying(120) NOT NULL,
    description text,
    characters text,
    brand_id integer NOT NULL,
    category_id integer NOT NULL,
    owner_id integer NOT NULL,
    updated date NOT NULL,
    available_in_stock boolean NOT NULL,
    volume_id integer NOT NULL,
    is_recommended boolean NOT NULL
);


ALTER TABLE products_product OWNER TO stroyshop;

--
-- Name: products_product_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE products_product_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE products_product_id_seq OWNER TO stroyshop;

--
-- Name: products_product_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE products_product_id_seq OWNED BY products_product.id;


--
-- Name: products_productcolor_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE products_productcolor_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE products_productcolor_id_seq OWNER TO stroyshop;

--
-- Name: products_productcolor_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE products_productcolor_id_seq OWNED BY products_color.id;


--
-- Name: products_productimage; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE products_productimage (
    id integer NOT NULL,
    image character varying(100) NOT NULL,
    product_id integer NOT NULL
);


ALTER TABLE products_productimage OWNER TO stroyshop;

--
-- Name: products_productimage_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE products_productimage_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE products_productimage_id_seq OWNER TO stroyshop;

--
-- Name: products_productimage_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE products_productimage_id_seq OWNED BY products_productimage.id;


--
-- Name: products_review; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE products_review (
    created_at timestamp with time zone NOT NULL,
    id integer NOT NULL,
    text text NOT NULL,
    is_approved boolean NOT NULL,
    product_id integer NOT NULL,
    reviewer_location character varying(120),
    subject character varying(60) NOT NULL,
    reviewer character varying(120) NOT NULL
);


ALTER TABLE products_review OWNER TO stroyshop;

--
-- Name: products_review_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE products_review_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE products_review_id_seq OWNER TO stroyshop;

--
-- Name: products_review_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE products_review_id_seq OWNED BY products_review.id;


--
-- Name: products_variation; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE products_variation (
    id integer NOT NULL,
    price numeric(10,2) NOT NULL,
    quantity integer NOT NULL,
    product_id integer NOT NULL,
    name character varying(60) NOT NULL,
    color_id integer
);


ALTER TABLE products_variation OWNER TO stroyshop;

--
-- Name: products_variation_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE products_variation_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE products_variation_id_seq OWNER TO stroyshop;

--
-- Name: products_variation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE products_variation_id_seq OWNED BY products_variation.id;


--
-- Name: products_volumetype; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE products_volumetype (
    id integer NOT NULL
);


ALTER TABLE products_volumetype OWNER TO stroyshop;

--
-- Name: products_volumetype_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE products_volumetype_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE products_volumetype_id_seq OWNER TO stroyshop;

--
-- Name: products_volumetype_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE products_volumetype_id_seq OWNED BY products_volumetype.id;


--
-- Name: products_volumetype_translation; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE products_volumetype_translation (
    id integer NOT NULL,
    language_code character varying(15) NOT NULL,
    name character varying(60) NOT NULL,
    master_id integer
);


ALTER TABLE products_volumetype_translation OWNER TO stroyshop;

--
-- Name: products_volumetype_translation_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE products_volumetype_translation_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE products_volumetype_translation_id_seq OWNER TO stroyshop;

--
-- Name: products_volumetype_translation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE products_volumetype_translation_id_seq OWNED BY products_volumetype_translation.id;


--
-- Name: users_client; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE users_client (
    id integer NOT NULL,
    address text,
    user_id integer NOT NULL
);


ALTER TABLE users_client OWNER TO stroyshop;

--
-- Name: users_client_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE users_client_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE users_client_id_seq OWNER TO stroyshop;

--
-- Name: users_client_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE users_client_id_seq OWNED BY users_client.id;


--
-- Name: users_merchant; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE users_merchant (
    id integer NOT NULL,
    merchant_type integer NOT NULL,
    user_id integer NOT NULL
);


ALTER TABLE users_merchant OWNER TO stroyshop;

--
-- Name: users_merchant_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE users_merchant_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE users_merchant_id_seq OWNER TO stroyshop;

--
-- Name: users_merchant_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE users_merchant_id_seq OWNED BY users_merchant.id;


--
-- Name: users_user; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE users_user (
    id integer NOT NULL,
    password character varying(128) NOT NULL,
    last_login timestamp with time zone,
    is_superuser boolean NOT NULL,
    is_staff boolean NOT NULL,
    phone character varying(12) NOT NULL,
    email character varying(254) NOT NULL,
    first_name character varying(30) NOT NULL,
    last_name character varying(30) NOT NULL,
    date_joined timestamp with time zone NOT NULL,
    is_active boolean NOT NULL,
    avatar character varying(100)
);


ALTER TABLE users_user OWNER TO stroyshop;

--
-- Name: users_user_groups; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE users_user_groups (
    id integer NOT NULL,
    user_id integer NOT NULL,
    group_id integer NOT NULL
);


ALTER TABLE users_user_groups OWNER TO stroyshop;

--
-- Name: users_user_groups_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE users_user_groups_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE users_user_groups_id_seq OWNER TO stroyshop;

--
-- Name: users_user_groups_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE users_user_groups_id_seq OWNED BY users_user_groups.id;


--
-- Name: users_user_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE users_user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE users_user_id_seq OWNER TO stroyshop;

--
-- Name: users_user_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE users_user_id_seq OWNED BY users_user.id;


--
-- Name: users_user_user_permissions; Type: TABLE; Schema: public; Owner: stroyshop
--

CREATE TABLE users_user_user_permissions (
    id integer NOT NULL,
    user_id integer NOT NULL,
    permission_id integer NOT NULL
);


ALTER TABLE users_user_user_permissions OWNER TO stroyshop;

--
-- Name: users_user_user_permissions_id_seq; Type: SEQUENCE; Schema: public; Owner: stroyshop
--

CREATE SEQUENCE users_user_user_permissions_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE users_user_user_permissions_id_seq OWNER TO stroyshop;

--
-- Name: users_user_user_permissions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: stroyshop
--

ALTER SEQUENCE users_user_user_permissions_id_seq OWNED BY users_user_user_permissions.id;


--
-- Name: auth_group id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY auth_group ALTER COLUMN id SET DEFAULT nextval('auth_group_id_seq'::regclass);


--
-- Name: auth_group_permissions id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY auth_group_permissions ALTER COLUMN id SET DEFAULT nextval('auth_group_permissions_id_seq'::regclass);


--
-- Name: auth_permission id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY auth_permission ALTER COLUMN id SET DEFAULT nextval('auth_permission_id_seq'::regclass);


--
-- Name: django_admin_log id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY django_admin_log ALTER COLUMN id SET DEFAULT nextval('django_admin_log_id_seq'::regclass);


--
-- Name: django_content_type id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY django_content_type ALTER COLUMN id SET DEFAULT nextval('django_content_type_id_seq'::regclass);


--
-- Name: django_migrations id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY django_migrations ALTER COLUMN id SET DEFAULT nextval('django_migrations_id_seq'::regclass);


--
-- Name: main_banner id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY main_banner ALTER COLUMN id SET DEFAULT nextval('main_banner_id_seq'::regclass);


--
-- Name: main_banner_translation id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY main_banner_translation ALTER COLUMN id SET DEFAULT nextval('main_banner_translation_id_seq'::regclass);


--
-- Name: main_menu id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY main_menu ALTER COLUMN id SET DEFAULT nextval('main_menu_id_seq'::regclass);


--
-- Name: main_menu_translation id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY main_menu_translation ALTER COLUMN id SET DEFAULT nextval('main_menu_translation_id_seq'::regclass);


--
-- Name: main_static id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY main_static ALTER COLUMN id SET DEFAULT nextval('main_static_id_seq'::regclass);


--
-- Name: main_static_translation id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY main_static_translation ALTER COLUMN id SET DEFAULT nextval('main_static_translation_id_seq'::regclass);


--
-- Name: products_brands id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY products_brands ALTER COLUMN id SET DEFAULT nextval('products_brands_id_seq'::regclass);


--
-- Name: products_category id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY products_category ALTER COLUMN id SET DEFAULT nextval('products_category_id_seq'::regclass);


--
-- Name: products_category_translation id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY products_category_translation ALTER COLUMN id SET DEFAULT nextval('products_category_translation_id_seq'::regclass);


--
-- Name: products_color id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY products_color ALTER COLUMN id SET DEFAULT nextval('products_productcolor_id_seq'::regclass);


--
-- Name: products_color_translation id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY products_color_translation ALTER COLUMN id SET DEFAULT nextval('products_color_translation_id_seq'::regclass);


--
-- Name: products_product id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY products_product ALTER COLUMN id SET DEFAULT nextval('products_product_id_seq'::regclass);


--
-- Name: products_productimage id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY products_productimage ALTER COLUMN id SET DEFAULT nextval('products_productimage_id_seq'::regclass);


--
-- Name: products_review id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY products_review ALTER COLUMN id SET DEFAULT nextval('products_review_id_seq'::regclass);


--
-- Name: products_variation id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY products_variation ALTER COLUMN id SET DEFAULT nextval('products_variation_id_seq'::regclass);


--
-- Name: products_volumetype id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY products_volumetype ALTER COLUMN id SET DEFAULT nextval('products_volumetype_id_seq'::regclass);


--
-- Name: products_volumetype_translation id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY products_volumetype_translation ALTER COLUMN id SET DEFAULT nextval('products_volumetype_translation_id_seq'::regclass);


--
-- Name: users_client id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY users_client ALTER COLUMN id SET DEFAULT nextval('users_client_id_seq'::regclass);


--
-- Name: users_merchant id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY users_merchant ALTER COLUMN id SET DEFAULT nextval('users_merchant_id_seq'::regclass);


--
-- Name: users_user id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY users_user ALTER COLUMN id SET DEFAULT nextval('users_user_id_seq'::regclass);


--
-- Name: users_user_groups id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY users_user_groups ALTER COLUMN id SET DEFAULT nextval('users_user_groups_id_seq'::regclass);


--
-- Name: users_user_user_permissions id; Type: DEFAULT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY users_user_user_permissions ALTER COLUMN id SET DEFAULT nextval('users_user_user_permissions_id_seq'::regclass);


--
-- Data for Name: auth_group; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY auth_group (id, name) FROM stdin;
\.


--
-- Name: auth_group_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('auth_group_id_seq', 1, false);


--
-- Data for Name: auth_group_permissions; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY auth_group_permissions (id, group_id, permission_id) FROM stdin;
\.


--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('auth_group_permissions_id_seq', 1, false);


--
-- Data for Name: auth_permission; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY auth_permission (id, name, content_type_id, codename) FROM stdin;
1	Can add log entry	1	add_logentry
2	Can change log entry	1	change_logentry
3	Can delete log entry	1	delete_logentry
4	Can add permission	2	add_permission
5	Can change permission	2	change_permission
6	Can delete permission	2	delete_permission
7	Can add group	3	add_group
8	Can change group	3	change_group
9	Can delete group	3	delete_group
10	Can add content type	4	add_contenttype
11	Can change content type	4	change_contenttype
12	Can delete content type	4	delete_contenttype
13	Can add session	5	add_session
14	Can change session	5	change_session
15	Can delete session	5	delete_session
16	Can add user	6	add_user
17	Can change user	6	change_user
18	Can delete user	6	delete_user
19	Can add category	7	add_category
20	Can change category	7	change_category
21	Can delete category	7	delete_category
22	Can add Category tree	8	add_categorytree
23	Can change Category tree	8	change_categorytree
24	Can delete Category tree	8	delete_categorytree
25	Can add categories	9	add_categories
26	Can change categories	9	change_categories
27	Can delete categories	9	delete_categories
28	Can add Category tree	12	add_categories
29	Can change Category tree	12	change_categories
30	Can delete Category tree	12	delete_categories
31	Can add category	14	add_category
32	Can change category	14	change_category
33	Can delete category	14	delete_category
34	Can add menu	15	add_menu
35	Can change menu	15	change_menu
36	Can delete menu	15	delete_menu
37	Can add banner	17	add_banner
38	Can change banner	17	change_banner
39	Can delete banner	17	delete_banner
40	Can add brands	19	add_brands
41	Can change brands	19	change_brands
42	Can delete brands	19	delete_brands
43	Can add client	20	add_client
44	Can change client	20	change_client
45	Can delete client	20	delete_client
46	Can add merchant	21	add_merchant
47	Can change merchant	21	change_merchant
48	Can delete merchant	21	delete_merchant
49	Can add variation	22	add_variation
50	Can change variation	22	change_variation
51	Can delete variation	22	delete_variation
52	Can add product	23	add_product
53	Can change product	23	change_product
54	Can delete product	23	delete_product
55	Can add product image	24	add_productimage
56	Can change product image	24	change_productimage
57	Can delete product image	24	delete_productimage
58	Can add review	25	add_review
59	Can change review	25	change_review
60	Can delete review	25	delete_review
61	Can add static	26	add_static
62	Can change static	26	change_static
63	Can delete static	26	delete_static
64	Can add color	28	add_color
65	Can change color	28	change_color
66	Can delete color	28	delete_color
67	Can add product color	29	add_productcolor
68	Can change product color	29	change_productcolor
69	Can delete product color	29	delete_productcolor
70	Can add volume type	31	add_volumetype
71	Can change volume type	31	change_volumetype
72	Can delete volume type	31	delete_volumetype
\.


--
-- Name: auth_permission_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('auth_permission_id_seq', 72, true);


--
-- Data for Name: django_admin_log; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY django_admin_log (id, action_time, object_id, object_repr, action_flag, change_message, content_type_id, user_id) FROM stdin;
1	2018-02-22 02:06:20.38367+05	1	998389478	2	[{"changed": {"fields": ["phone"]}}]	6	1
2	2018-02-23 00:49:58.337403+05	2	Водоэмульсионная краска	1	[{"added": {}}]	14	1
3	2018-02-23 00:50:56.10817+05	2	Vodoimulsiya kraska	2	[{"changed": {"fields": ["name", "slug"]}}]	14	1
4	2018-02-23 01:02:10.03188+05	3	Герметика и Монтаж пена	1	[{"added": {}}]	14	1
5	2018-02-23 01:02:24.951449+05	4	Грунтовка	1	[{"added": {}}]	14	1
6	2018-02-23 01:03:03.302834+05	5	Декоративная штукатура	1	[{"added": {}}]	14	1
7	2018-02-23 01:03:21.789414+05	6	Инструменты	1	[{"added": {}}]	14	1
8	2018-02-23 01:03:36.257601+05	7	Клеи	1	[{"added": {}}]	14	1
9	2018-02-23 01:03:46.952173+05	8	Колер	1	[{"added": {}}]	14	1
10	2018-02-23 01:04:07.230223+05	9	Сухие строй-смеси	1	[{"added": {}}]	14	1
11	2018-02-23 01:04:36.275896+05	10	Эмалевая краска и Лак	1	[{"added": {}}]	14	1
12	2018-02-23 01:05:07.921303+05	11	Внутренная	1	[{"added": {}}]	14	1
13	2018-02-23 01:05:29.352101+05	12	Премиум	1	[{"added": {}}]	14	1
14	2018-02-23 01:05:51.146993+05	13	Универсальная	1	[{"added": {}}]	14	1
15	2018-02-23 01:06:01.911498+05	14	Фасадная	1	[{"added": {}}]	14	1
16	2018-02-23 01:06:24.137805+05	15	Цветная	1	[{"added": {}}]	14	1
17	2018-02-23 01:08:28.416356+05	16	Внутренная	1	[{"added": {}}]	14	1
18	2018-02-23 01:08:43.751619+05	17	Премиум	1	[{"added": {}}]	14	1
19	2018-02-23 01:19:42.754808+05	1	Menu object	1	[{"added": {}}]	15	1
20	2018-02-23 01:20:46.101545+05	2	Оплата	1	[{"added": {}}]	15	1
21	2018-02-23 01:20:59.796596+05	3	Контакты	1	[{"added": {}}]	15	1
22	2018-02-23 01:21:15.193913+05	4	Премущества	1	[{"added": {}}]	15	1
23	2018-02-23 01:30:31.135794+05	1	Супер-прочные краски от "SICO"	1	[{"added": {}}]	17	1
24	2018-02-23 01:30:51.283106+05	2	Супер-прочные краски от "SICO"	1	[{"added": {}}]	17	1
25	2018-02-23 01:34:09.424736+05	1	Artens	1	[{"added": {}}]	19	1
26	2018-02-23 01:34:29.138584+05	2	LUXENS	1	[{"added": {}}]	19	1
27	2018-02-23 01:34:42.46066+05	3	Lexman	1	[{"added": {}}]	19	1
28	2018-02-23 01:35:00.864351+05	4	STERWINS	1	[{"added": {}}]	19	1
29	2018-02-23 02:17:37.130895+05	1	A'zam	2	[{"changed": {"fields": ["first_name", "last_name"]}}]	6	1
30	2018-02-27 19:09:05.722522+05	2	Water-based paint	2	[{"changed": {"fields": ["name", "slug"]}}]	14	1
31	2018-02-27 19:09:09.070796+05	4	STERWINS	2	[{"changed": {"fields": ["category"]}}]	19	1
32	2018-02-27 19:34:53.531314+05	5	test	1	[{"added": {}}]	19	1
33	2018-02-27 19:35:26.714771+05	6	test2	1	[{"added": {}}]	19	1
34	2018-02-27 19:36:49.027114+05	7	test3	1	[{"added": {}}]	19	1
35	2018-02-27 19:37:56.418972+05	8	test4	1	[{"added": {}}]	19	1
36	2018-02-27 19:38:25.900902+05	9	test5	1	[{"added": {}}]	19	1
37	2018-02-27 19:43:09.001742+05	10	test6	1	[{"added": {}}]	19	1
38	2018-02-27 19:43:22.62789+05	11	test7	1	[{"added": {}}]	19	1
39	2018-02-27 19:46:12.03526+05	12	test8	1	[{"added": {}}]	19	1
40	2018-02-27 19:46:27.323443+05	13	test9	1	[{"added": {}}]	19	1
41	2018-02-27 19:47:29.818372+05	14	test10	1	[{"added": {}}]	19	1
42	2018-02-27 19:48:26.398102+05	15	test11	1	[{"added": {}}]	19	1
43	2018-02-27 19:49:24.561436+05	16	test12	1	[{"added": {}}]	19	1
44	2018-02-27 19:49:47.716699+05	17	test13	1	[{"added": {}}]	19	1
45	2018-02-27 19:50:03.532096+05	18	test14	1	[{"added": {}}]	19	1
46	2018-02-27 19:50:21.767553+05	19	15	1	[{"added": {}}]	19	1
47	2018-02-27 19:52:43.16083+05	1	dota 2	1	[{"added": {}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "variation", "object": "qop"}}, {"added": {"name": "variation", "object": "wr"}}, {"added": {"name": "variation", "object": "warden"}}]	23	1
48	2018-02-27 19:54:35.017127+05	4	Benefits	2	[{"changed": {"fields": ["name", "slug"]}}]	15	1
49	2018-02-27 19:54:51.113515+05	4	Avfzalliklarimiz	2	[{"changed": {"fields": ["name", "slug"]}}]	15	1
50	2018-02-27 19:55:31.391045+05	2	deadmau5	1	[{"added": {}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "variation", "object": "midas's heel"}}, {"added": {"name": "variation", "object": "strobe"}}, {"added": {"name": "variation", "object": "clockwork"}}]	23	1
51	2018-02-27 23:50:56.217675+05	2	Super power	2	[{"changed": {"fields": ["name", "slug", "image"]}}]	17	1
52	2018-02-27 23:51:19.044698+05	2	Super mustahkam	2	[{"changed": {"fields": ["name", "slug", "image"]}}]	17	1
53	2018-02-28 00:04:31.267672+05	1	Доставка	1	[{"added": {}}]	26	1
54	2018-02-28 00:04:53.286292+05	2	Оплата	1	[{"added": {}}]	26	1
55	2018-02-28 00:05:08.589765+05	3	Контакты	1	[{"added": {}}]	26	1
56	2018-02-28 00:05:23.825602+05	4	Премущества	1	[{"added": {}}]	26	1
57	2018-02-28 00:08:46.59529+05	4	Preference	2	[{"changed": {"fields": ["name", "slug", "body"]}}]	26	1
58	2018-02-28 00:09:30.545452+05	4	Benefits	2	[{"changed": {"fields": ["name", "slug", "body"]}}]	26	1
59	2018-02-28 00:09:52.33979+05	4	Премущества	2	[]	15	1
60	2018-02-28 00:09:57.529773+05	4	Benefits	2	[]	15	1
61	2018-02-28 00:10:11.445205+05	3	Контакты	2	[]	15	1
62	2018-02-28 00:17:58.882693+05	3	Contact	2	[{"changed": {"fields": ["name", "slug", "body"]}}]	26	1
63	2018-02-28 00:31:48.260238+05	3	aasasasas	1	[{"added": {}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "variation", "object": "5 litr"}}]	23	1
64	2018-03-01 00:32:19.227333+05	18	test14	2	[{"changed": {"fields": ["category"]}}]	19	1
65	2018-03-01 00:43:37.551288+05	1	dota 2	2	[{"changed": {"fields": ["volume"]}}, {"changed": {"name": "variation", "object": "9", "fields": ["name"]}}]	23	1
66	2018-03-01 00:44:15.813834+05	3	aasasasas	2	[{"changed": {"name": "variation", "object": "5", "fields": ["name"]}}]	23	1
67	2018-03-01 00:44:37.567354+05	2	deadmau5	2	[{"changed": {"fields": ["volume"]}}]	23	1
68	2018-03-01 12:27:15.437796+05	1	Красный	1	[{"added": {}}]	28	1
69	2018-03-01 12:27:21.872629+05	1	Red	2	[{"changed": {"fields": ["name"]}}]	28	1
70	2018-03-01 12:27:29.751764+05	1	Qizil	2	[{"changed": {"fields": ["name"]}}]	28	1
71	2018-03-01 12:36:32.743235+05	1	Qizil	2	[]	28	1
72	2018-03-01 12:36:53.027275+05	2	Yashil	1	[{"added": {}}]	28	1
73	2018-03-01 12:37:05.448547+05	2	Зеленый	2	[{"changed": {"fields": ["name"]}}]	28	1
74	2018-03-01 12:37:14.03593+05	2	Green	2	[{"changed": {"fields": ["name"]}}]	28	1
75	2018-03-01 15:12:41.142509+05	2	Зеленый	2	[{"changed": {"fields": ["color"]}}]	28	1
76	2018-03-01 15:12:47.182308+05	2	Green	2	[]	28	1
77	2018-03-01 15:26:09.779115+05	3	aasasasas	2	[{"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "Variation", "object": "Test var 1"}}, {"added": {"name": "Variation", "object": "Test var 2"}}, {"added": {"name": "Variation", "object": "Test var 3"}}]	23	1
78	2018-03-01 19:14:22.952465+05	3	aasasasas	2	[{"changed": {"name": "Variation", "object": "Test var 1", "fields": ["color"]}}, {"changed": {"name": "Variation", "object": "Test var 2", "fields": ["color"]}}]	23	1
79	2018-03-01 21:54:04.219674+05	3	aasasasas	2	[{"changed": {"name": "Variation", "object": "Test var 3", "fields": ["color"]}}]	23	1
80	2018-03-02 00:41:18.167515+05	18	Краска	1	[{"added": {}}]	14	1
81	2018-03-02 00:41:51.051387+05	19	Универсальная	1	[{"added": {}}]	14	1
82	2018-03-02 00:42:12.977476+05	20	Половая	1	[{"added": {}}]	14	1
83	2018-03-02 00:42:46.870359+05	21	Фасадная	1	[{"added": {}}]	14	1
84	2018-03-02 00:43:12.650837+05	19	15	3		19	1
85	2018-03-02 00:43:12.678879+05	18	test14	3		19	1
86	2018-03-02 00:43:12.689966+05	17	test13	3		19	1
87	2018-03-02 00:43:12.700895+05	16	test12	3		19	1
88	2018-03-02 00:43:12.712012+05	15	test11	3		19	1
89	2018-03-02 00:43:12.723085+05	14	test10	3		19	1
90	2018-03-02 00:43:12.734174+05	13	test9	3		19	1
91	2018-03-02 00:43:12.745173+05	12	test8	3		19	1
92	2018-03-02 00:43:12.756448+05	11	test7	3		19	1
93	2018-03-02 00:43:12.767561+05	10	test6	3		19	1
94	2018-03-02 00:43:12.778427+05	9	test5	3		19	1
95	2018-03-02 00:43:12.78988+05	8	test4	3		19	1
96	2018-03-02 00:43:12.800683+05	7	test3	3		19	1
97	2018-03-02 00:43:12.811664+05	6	test2	3		19	1
98	2018-03-02 00:43:12.82261+05	5	test	3		19	1
99	2018-03-02 00:43:12.834037+05	4	STERWINS	3		19	1
100	2018-03-02 00:43:12.844779+05	3	Lexman	3		19	1
101	2018-03-02 00:43:12.856029+05	2	LUXENS	3		19	1
102	2018-03-02 00:43:12.867089+05	1	Artens	3		19	1
103	2018-03-02 00:43:54.753628+05	20	Polard	1	[{"added": {}}]	19	1
104	2018-03-02 00:48:40.827196+05	3	Polard	1	[{"added": {}}]	6	1
105	2018-03-02 00:48:55.550082+05	1	None	1	[{"added": {}}]	21	1
106	2018-03-02 00:49:27.370185+05	4	Hayat	1	[{"added": {}}]	6	1
107	2018-03-02 00:49:33.350385+05	2	None	1	[{"added": {}}]	21	1
108	2018-03-02 00:57:14.722193+05	4	Econom 118 (белая)	1	[{"added": {}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "Variation", "object": "2.9"}}]	23	1
109	2018-03-02 00:58:15.008161+05	5	Eko (половая)	1	[{"added": {}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "Variation", "object": "2.9"}}]	23	1
110	2018-03-02 00:59:51.862106+05	6	FASAD+	1	[{"added": {}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "Variation", "object": "20"}}]	23	1
111	2018-03-02 01:01:08.265537+05	6	FASAD+	2	[{"added": {"name": "Variation", "object": "10"}}, {"added": {"name": "Variation", "object": "4"}}]	23	1
112	2018-03-02 01:01:56.671527+05	21	Hayat	1	[{"added": {}}]	19	1
113	2018-03-02 01:02:05.973062+05	21	Hayat	2	[]	19	1
114	2018-03-02 01:04:50.306427+05	7	HAYAT ECO INTERIOR Краска для потолков	1	[{"added": {}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "Variation", "object": "4.5"}}, {"added": {"name": "Variation", "object": "15"}}, {"added": {"name": "Variation", "object": "25"}}]	23	1
115	2018-03-02 01:06:11.29527+05	8	HAYAT ECO Эмаль Универсал (белая)	1	[{"added": {}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "Variation", "object": "22"}}, {"added": {"name": "Variation", "object": "3"}}]	23	1
116	2018-03-02 01:06:47.031917+05	22	Пена	1	[{"added": {}}]	14	1
117	2018-03-02 01:08:49.919511+05	9	HAYAT EXTRA Пена монтажная (аплик/пист) 700/750)	1	[{"added": {}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "Variation", "object": "750"}}]	23	1
118	2018-03-02 01:09:35.306617+05	23	Краска-115	1	[{"added": {}}]	14	1
119	2018-03-02 01:11:08.486576+05	10	HAYAT PREMIUM FASAD Краска для нар. работ силикон	1	[{"added": {}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "product image", "object": "ProductImage object"}}, {"added": {"name": "Variation", "object": "15"}}, {"added": {"name": "Variation", "object": "25"}}]	23	1
120	2018-03-02 04:13:52.956545+05	1	Кг	2	[{"changed": {"fields": ["name"]}}]	31	1
121	2018-03-02 04:14:01.613962+05	1	Kg	2	[{"changed": {"fields": ["name"]}}]	31	1
122	2018-03-02 04:14:08.147667+05	1	Kg	2	[{"changed": {"fields": ["name"]}}]	31	1
123	2018-03-02 05:13:44.027982+05	16	Test comment	2	[{"changed": {"fields": ["is_approved"]}}]	25	1
\.


--
-- Name: django_admin_log_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('django_admin_log_id_seq', 123, true);


--
-- Data for Name: django_content_type; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY django_content_type (id, app_label, model) FROM stdin;
1	admin	logentry
2	auth	permission
3	auth	group
4	contenttypes	contenttype
5	sessions	session
6	users	user
7	users	category
8	products	categorytree
9	users	categories
10	users	categoriestranslation
11	products	categoriestranslation
12	products	categories
13	products	categorytranslation
14	products	category
15	main	menu
16	main	menutranslation
17	main	banner
18	main	bannertranslation
19	products	brands
20	users	client
21	users	merchant
22	products	variation
23	products	product
24	products	productimage
25	products	review
26	main	static
27	main	statictranslation
28	products	color
29	products	productcolor
30	products	colortranslation
31	products	volumetype
32	products	volumetypetranslation
\.


--
-- Name: django_content_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('django_content_type_id_seq', 32, true);


--
-- Data for Name: django_migrations; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY django_migrations (id, app, name, applied) FROM stdin;
1	contenttypes	0001_initial	2018-02-14 01:14:58.850219+05
2	contenttypes	0002_remove_content_type_name	2018-02-14 01:14:58.938906+05
3	auth	0001_initial	2018-02-14 01:14:59.649186+05
4	auth	0002_alter_permission_name_max_length	2018-02-14 01:14:59.680378+05
5	auth	0003_alter_user_email_max_length	2018-02-14 01:14:59.708635+05
6	auth	0004_alter_user_username_opts	2018-02-14 01:14:59.743361+05
7	auth	0005_alter_user_last_login_null	2018-02-14 01:14:59.77669+05
8	auth	0006_require_contenttypes_0002	2018-02-14 01:14:59.792122+05
9	auth	0007_alter_validators_add_error_messages	2018-02-14 01:14:59.820154+05
10	auth	0008_alter_user_username_max_length	2018-02-14 01:14:59.853005+05
11	users	0001_initial	2018-02-14 01:15:00.392038+05
12	admin	0001_initial	2018-02-14 01:15:00.648793+05
13	admin	0002_logentry_remove_auto_add	2018-02-14 01:15:00.691949+05
14	sessions	0001_initial	2018-02-14 01:15:00.892632+05
15	users	0002_auto_20180131_1203	2018-02-14 01:15:00.927092+05
16	users	0003_auto_20180131_1206	2018-02-14 01:15:00.980546+05
17	users	0004_auto_20180205_1214	2018-02-14 01:15:01.191497+05
18	users	0005_category	2018-02-14 01:15:01.590694+05
19	users	0006_category_is_top	2018-02-14 01:22:03.269973+05
20	users	0007_auto_20180222_1029	2018-02-22 15:29:51.05192+05
21	users	0008_auto_20180222_1857	2018-02-22 23:57:20.921411+05
22	products	0001_initial	2018-02-23 00:01:19.138857+05
23	products	0002_auto_20180222_1947	2018-02-23 00:47:49.435891+05
24	users	0009_auto_20180222_1947	2018-02-23 00:47:49.644082+05
25	products	0003_auto_20180222_1949	2018-02-23 00:49:27.942581+05
26	main	0001_initial	2018-02-23 01:12:34.357276+05
27	main	0002_menu_extra_attrs	2018-02-23 01:16:07.848813+05
28	main	0003_remove_menu_extra_attrs	2018-02-23 01:18:27.811963+05
29	main	0004_auto_20180222_2026	2018-02-23 01:27:05.881903+05
30	products	0004_brands	2018-02-23 01:27:05.982353+05
31	products	0005_auto_20180222_2032	2018-02-23 01:32:30.771728+05
32	products	0006_product_variation	2018-02-23 02:04:19.576038+05
33	users	0010_client_merchant	2018-02-23 02:04:19.886099+05
34	users	0011_remove_user_user_type	2018-02-23 02:16:03.903654+05
35	main	0005_auto_20180222_2133	2018-02-23 02:33:20.447952+05
36	products	0007_auto_20180222_2133	2018-02-23 02:33:21.129281+05
37	users	0012_auto_20180222_2133	2018-02-23 02:33:21.371609+05
38	products	0008_auto_20180222_2137	2018-02-23 02:37:08.688222+05
39	products	0009_auto_20180222_2153	2018-02-23 02:53:16.152403+05
40	products	0010_auto_20180224_1001	2018-02-24 15:01:22.570806+05
41	products	0011_variation_color	2018-02-24 15:06:41.999214+05
42	products	0012_auto_20180224_1009	2018-02-24 15:09:16.168202+05
43	products	0013_brands_category	2018-02-27 18:53:12.324191+05
44	products	0014_auto_20180227_1403	2018-02-27 19:03:27.617272+05
45	products	0015_auto_20180227_1408	2018-02-27 19:08:06.459309+05
46	main	0006_auto_20180227_1901	2018-02-28 00:01:53.381182+05
47	main	0007_auto_20180227_1903	2018-02-28 00:03:50.772608+05
48	products	0016_auto_20180301_0702	2018-03-01 12:12:19.188591+05
49	products	0017_remove_variation_color	2018-03-01 12:12:19.33348+05
50	products	0018_variation_color	2018-03-01 12:12:19.455118+05
51	products	0019_remove_color_name	2018-03-01 12:16:30.866471+05
52	products	0020_auto_20180301_0722	2018-03-01 12:22:24.256942+05
53	products	0021_auto_20180301_0723	2018-03-01 12:23:03.999676+05
54	products	0022_auto_20180301_0726	2018-03-01 12:26:23.216134+05
55	products	0023_auto_20180301_1658	2018-03-01 21:58:51.392816+05
56	products	0024_product_available_in_stock	2018-03-02 00:26:17.156423+05
57	products	0025_auto_20180301_1946	2018-03-02 00:46:35.087206+05
58	products	0026_auto_20180301_2256	2018-03-02 03:56:06.390639+05
59	products	0027_auto_20180301_2256	2018-03-02 04:11:17.241546+05
60	products	0028_auto_20180301_2259	2018-03-02 04:11:17.418572+05
61	products	0029_remove_product_volume	2018-03-02 04:11:17.607072+05
62	products	0030_product_volume	2018-03-02 04:11:17.717652+05
63	products	0031_auto_20180301_2307	2018-03-02 04:11:17.838639+05
64	products	0032_auto_20180301_2311	2018-03-02 04:12:00.411693+05
65	products	0033_product_is_recommended	2018-03-02 04:18:51.124964+05
66	products	0034_auto_20180301_2331	2018-03-02 04:31:11.641572+05
67	products	0035_auto_20180301_2332	2018-03-02 04:32:54.647829+05
68	products	0036_auto_20180301_2339	2018-03-02 04:39:23.192744+05
69	products	0037_auto_20180301_2339	2018-03-02 04:40:01.416594+05
\.


--
-- Name: django_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('django_migrations_id_seq', 69, true);


--
-- Data for Name: django_session; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY django_session (session_key, session_data, expire_date) FROM stdin;
oxr7hxshvn5rov26rbllhnrbfmk7cev0	MTM4NjVlM2IwNDBjZmEzYWE1NzY0MzM2NDU1NzZlYjYwMGYxZDhlYzp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJkMjY5MGZlMGIwYTRlYWZmMTYyNDAxZjkzNjg3Y2IyMWMyZGM2OTNiIn0=	2018-02-28 01:25:35.034684+05
a7k6adi6ac6uaroshpqlho0nsgfgsvbw	MjA5MDFjNjUxMmM3MDE5ZDVhOWUzYzM3YzE4OWE4Zjc5Mjg2MTYyMjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlOTE2NDYyYjZmMWEzN2JiMmE2YTMyNDFkODk0YzU4MDM2MDZlOTMzIn0=	2018-03-08 02:06:03.175184+05
fii5m7pfwnufcjmwokikupas5atuph1n	MjA5MDFjNjUxMmM3MDE5ZDVhOWUzYzM3YzE4OWE4Zjc5Mjg2MTYyMjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlOTE2NDYyYjZmMWEzN2JiMmE2YTMyNDFkODk0YzU4MDM2MDZlOTMzIn0=	2018-03-08 23:49:57.589949+05
4iu00yw2lrnim6pkigg6tjt0fsxmjf9k	MjA5MDFjNjUxMmM3MDE5ZDVhOWUzYzM3YzE4OWE4Zjc5Mjg2MTYyMjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlOTE2NDYyYjZmMWEzN2JiMmE2YTMyNDFkODk0YzU4MDM2MDZlOTMzIn0=	2018-03-10 15:11:26.529502+05
8lcc9cggor490024cxu5583oznwbba4w	MjA5MDFjNjUxMmM3MDE5ZDVhOWUzYzM3YzE4OWE4Zjc5Mjg2MTYyMjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlOTE2NDYyYjZmMWEzN2JiMmE2YTMyNDFkODk0YzU4MDM2MDZlOTMzIn0=	2018-03-13 02:03:55.661669+05
85zfbwxcuisq5eiv3yyz4x5qfh5f5wht	MjA5MDFjNjUxMmM3MDE5ZDVhOWUzYzM3YzE4OWE4Zjc5Mjg2MTYyMjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlOTE2NDYyYjZmMWEzN2JiMmE2YTMyNDFkODk0YzU4MDM2MDZlOTMzIn0=	2018-03-13 14:02:21.272557+05
7h90470ak4onkee7z2kfdz7zkwmktych	MjA5MDFjNjUxMmM3MDE5ZDVhOWUzYzM3YzE4OWE4Zjc5Mjg2MTYyMjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlOTE2NDYyYjZmMWEzN2JiMmE2YTMyNDFkODk0YzU4MDM2MDZlOTMzIn0=	2018-03-13 19:28:32.933524+05
fxlv414wmgvpfp59xwwxthtd6fpc52pf	MjA5MDFjNjUxMmM3MDE5ZDVhOWUzYzM3YzE4OWE4Zjc5Mjg2MTYyMjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlOTE2NDYyYjZmMWEzN2JiMmE2YTMyNDFkODk0YzU4MDM2MDZlOTMzIn0=	2018-03-15 19:13:58.131918+05
an50alff4av105k510p35l8fcpyqsonr	MjA5MDFjNjUxMmM3MDE5ZDVhOWUzYzM3YzE4OWE4Zjc5Mjg2MTYyMjp7Il9hdXRoX3VzZXJfaWQiOiIxIiwiX2F1dGhfdXNlcl9iYWNrZW5kIjoiZGphbmdvLmNvbnRyaWIuYXV0aC5iYWNrZW5kcy5Nb2RlbEJhY2tlbmQiLCJfYXV0aF91c2VyX2hhc2giOiJlOTE2NDYyYjZmMWEzN2JiMmE2YTMyNDFkODk0YzU4MDM2MDZlOTMzIn0=	2018-03-16 00:35:30.702356+05
\.


--
-- Data for Name: main_banner; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY main_banner (id, "order") FROM stdin;
1	0
2	0
\.


--
-- Name: main_banner_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('main_banner_id_seq', 2, true);


--
-- Data for Name: main_banner_translation; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY main_banner_translation (id, language_code, name, slug, image, master_id) FROM stdin;
1	ru	Супер-прочные краски от "SICO"	super-prochnye-kraski-ot-sico	banners/2018/02/22/lion.jpg	1
2	ru	Супер-прочные краски от "SICO"	super-prochnye-kraski-ot-sico2	banners/2018/02/22/hmk1.jpg	2
3	en	Super power	super-power	banners/2018/02/27/hmk1.jpg	2
4	uz	Super mustahkam	super-mustahkam	banners/2018/02/27/hmk1_iaKshUz.jpg	2
\.


--
-- Name: main_banner_translation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('main_banner_translation_id_seq', 4, true);


--
-- Data for Name: main_menu; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY main_menu (id, "order") FROM stdin;
1	0
2	0
4	0
3	0
\.


--
-- Name: main_menu_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('main_menu_id_seq', 4, true);


--
-- Data for Name: main_menu_translation; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY main_menu_translation (id, language_code, name, slug, master_id) FROM stdin;
1	ru	Доставка	dostavka	1
2	ru	Оплата	oplata	2
3	ru	Контакты	kontakty	3
4	ru	Премущества	premushestva	4
5	en	Benefits	benefits	4
6	uz	Avfzalliklarimiz	avfzalliklarimiz	4
\.


--
-- Name: main_menu_translation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('main_menu_translation_id_seq', 6, true);


--
-- Data for Name: main_static; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY main_static (id) FROM stdin;
1
2
3
4
\.


--
-- Name: main_static_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('main_static_id_seq', 4, true);


--
-- Data for Name: main_static_translation; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY main_static_translation (id, language_code, name, slug, image, body, master_id) FROM stdin;
1	ru	Доставка	dostavka		<p>ДоставкаДоставкаДоставкаДоставкаДоставкаДоставкаДоставкаДоставкаДоставкаДоставка</p>	1
2	ru	Оплата	oplata		<p>ОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплатаОплата</p>	2
3	ru	Контакты	kontakty		<p>КонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтактыКонтакты</p>	3
4	ru	Премущества	premushestva		<p>ПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремуществаПремущества</p>	4
5	en	Benefits	benefits		<p><a href="http://127.0.0.1:8000/en/admin/main/menu/4/change/">BenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefitsBenefits</a></p>	4
6	en	Contact	contact		<p>ContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContactContact</p>	3
\.


--
-- Name: main_static_translation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('main_static_translation_id_seq', 6, true);


--
-- Data for Name: products_brands; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY products_brands (id, name, logo, category_id) FROM stdin;
20	Polard	brands/leones-fondos-de-pantalla-hd-Fotosdelanaturaleza-4-1024x640.jpg	10
21	Hayat	brands/VGjc50U.jpg	19
\.


--
-- Name: products_brands_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('products_brands_id_seq', 21, true);


--
-- Data for Name: products_category; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY products_category (id, "order", lft, rght, tree_id, mptt_level, parent_id) FROM stdin;
4	0	1	2	3	0	\N
11	0	2	3	4	1	5
12	0	4	5	4	1	5
6	0	1	2	6	0	\N
7	0	1	2	7	0	\N
8	0	1	2	8	0	\N
9	0	1	2	9	0	\N
16	0	7	8	4	2	13
13	0	6	11	4	1	5
14	0	12	13	4	1	5
5	0	1	16	4	0	\N
15	0	14	15	4	1	5
17	0	9	10	4	2	13
19	0	3	4	10	2	18
20	0	5	6	10	2	18
2	0	1	4	1	0	\N
21	0	2	3	1	1	2
3	0	1	4	2	0	\N
22	0	2	3	2	1	3
10	0	1	10	10	0	\N
18	0	2	9	10	1	10
23	0	7	8	10	2	18
\.


--
-- Name: products_category_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('products_category_id_seq', 23, true);


--
-- Data for Name: products_category_translation; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY products_category_translation (id, language_code, name, master_id, slug) FROM stdin;
2	ru	Водоэмульсионная краска	2	vodoimulsionnaya-kraska
3	uz	Vodoimulsiya kraska	2	vodoimulsiya-kraska
4	ru	Герметика и Монтаж пена	3	germetika-i-montazh-pena
5	ru	Грунтовка	4	gruntovka
6	ru	Декоративная штукатура	5	dekorativnaya-shtukatura
7	ru	Инструменты	6	instrumenty
8	ru	Клеи	7	klei
9	ru	Колер	8	koler
10	ru	Сухие строй-смеси	9	suhie-stroj-smesi
11	ru	Эмалевая краска и Лак	10	emalevaya-kraska-i-lak
12	ru	Внутренная	11	vnutrennaya
13	ru	Премиум	12	premium
14	ru	Универсальная	13	universalnaya
15	ru	Фасадная	14	fasadnaya
16	ru	Цветная	15	cvetnaya
17	ru	Внутренная	16	vnutrennaya
18	ru	Премиум	17	premium
19	en	Water-based paint	2	water-based-paint
20	ru	Краска	18	kraska
21	ru	Универсальная	19	universalnaya
22	ru	Половая	20	polovaya
23	ru	Фасадная	21	fasadnaya
24	ru	Пена	22	pena
25	ru	Краска-115	23	kraska-115
\.


--
-- Name: products_category_translation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('products_category_translation_id_seq', 25, true);


--
-- Data for Name: products_color; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY products_color (id, color) FROM stdin;
1	#FF0000
2	#3CB823
\.


--
-- Data for Name: products_color_translation; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY products_color_translation (id, language_code, name, master_id) FROM stdin;
1	ru	Красный	1
2	en	Red	1
3	uz	Qizil	1
4	uz	Yashil	2
5	ru	Зеленый	2
6	en	Green	2
\.


--
-- Name: products_color_translation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('products_color_translation_id_seq', 6, true);


--
-- Data for Name: products_product; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY products_product (id, name, description, characters, brand_id, category_id, owner_id, updated, available_in_stock, volume_id, is_recommended) FROM stdin;
5	Eko (половая)			20	20	3	2018-03-01	t	1	f
10	HAYAT PREMIUM FASAD Краска для нар. работ силикон	<p>Предназначена для наржной окраски зданий и сооружений, по кирпичным и бетонным, деревянным и другим пористым покрытиям по загрунтованной поверхности металла</p>		21	23	4	2018-03-01	t	1	f
8	HAYAT ECO Эмаль Универсал (белая)			21	19	4	2018-03-01	t	1	f
9	HAYAT EXTRA Пена монтажная (аплик/пист) 700/750)			21	22	4	2018-03-01	t	1	f
6	FASAD+			20	21	3	2018-03-01	t	1	f
7	HAYAT ECO INTERIOR Краска для потолков	<p>Предназначена для отделочных работ внутри помещения (стен и потолков) и для нанесения по дереву, картону и другим пористым поверхностям.</p>		21	19	4	2018-03-01	t	1	f
4	Econom 118 (белая)			20	19	3	2018-03-01	t	1	f
\.


--
-- Name: products_product_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('products_product_id_seq', 10, true);


--
-- Name: products_productcolor_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('products_productcolor_id_seq', 2, true);


--
-- Data for Name: products_productimage; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY products_productimage (id, image, product_id) FROM stdin;
10	products/2018/03/01/lion.jpg	4
11	products/2018/03/01/c1287d5e869f02ad2195001a3c27648e--backgrounds-wallpapers-hd-wallpape_NDl9d0F.jpg	4
12	products/2018/03/01/featured48.jpg	5
13	products/2018/03/01/earth_by_n4u2k.jpg	5
14	products/2018/03/01/awesome-rain-wallpaper_0.jpg	5
15	products/2018/03/01/featured48_CSBI75r.jpg	6
16	products/2018/03/01/earth_by_n4u2k_r77LwrL.jpg	6
17	products/2018/03/01/seo-fon.jpg	7
18	products/2018/03/01/wire2.png	7
19	products/2018/03/01/lion_BBLH122.jpg	7
20	products/2018/03/01/earth_by_n4u2k_G6XxCio.jpg	8
21	products/2018/03/01/earth_by_n4u2k_0FxWiPf.jpg	8
22	products/2018/03/01/earth_by_n4u2k_10LvCsk.jpg	9
23	products/2018/03/01/featured48_2ImrDws.jpg	9
24	products/2018/03/01/wire2_hlgRl8P.png	9
25	products/2018/03/01/seo-fon_0I6POl8.jpg	10
26	products/2018/03/01/wire2_j6kkOnf.png	10
27	products/2018/03/01/VGjc50U_zvJmcmb.jpg	10
\.


--
-- Name: products_productimage_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('products_productimage_id_seq', 27, true);


--
-- Data for Name: products_review; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY products_review (created_at, id, text, is_approved, product_id, reviewer_location, subject, reviewer) FROM stdin;
2018-03-02 05:13:14.751711+05	16	Test message	t	10	Tashkent	Test comment	Maxam
2018-03-02 05:13:47.21186+05	17	Test message	f	10	Tashkent	Test comment	Maxam
2018-03-02 05:15:33.576381+05	18	Test message	f	10	Tashkent	Test comment	Maxam
\.


--
-- Name: products_review_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('products_review_id_seq', 18, true);


--
-- Data for Name: products_variation; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY products_variation (id, price, quantity, product_id, name, color_id) FROM stdin;
11	50000.00	1	4	2.9	\N
12	51000.00	1	5	2.9	\N
13	52000.00	1	6	20	\N
14	53000.00	1	6	10	\N
15	54000.00	1	6	4	\N
16	55000.00	1	7	4.5	\N
17	56000.00	1	7	15	\N
18	57000.00	1	7	25	\N
19	58000.00	1	8	22	\N
20	59000.00	1	8	3	\N
21	60000.00	1	9	750	\N
22	61000.00	1	10	15	\N
23	62000.00	1	10	25	\N
\.


--
-- Name: products_variation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('products_variation_id_seq', 23, true);


--
-- Data for Name: products_volumetype; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY products_volumetype (id) FROM stdin;
1
\.


--
-- Name: products_volumetype_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('products_volumetype_id_seq', 1, true);


--
-- Data for Name: products_volumetype_translation; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY products_volumetype_translation (id, language_code, name, master_id) FROM stdin;
1	ru	Кг	1
2	en	Kg	1
3	uz	Kg	1
\.


--
-- Name: products_volumetype_translation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('products_volumetype_translation_id_seq', 3, true);


--
-- Data for Name: users_client; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY users_client (id, address, user_id) FROM stdin;
\.


--
-- Name: users_client_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('users_client_id_seq', 1, false);


--
-- Data for Name: users_merchant; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY users_merchant (id, merchant_type, user_id) FROM stdin;
1	1	3
2	1	4
\.


--
-- Name: users_merchant_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('users_merchant_id_seq', 2, true);


--
-- Data for Name: users_user; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY users_user (id, password, last_login, is_superuser, is_staff, phone, email, first_name, last_name, date_joined, is_active, avatar) FROM stdin;
1	pbkdf2_sha256$36000$MddcO5HnWX0h$n0Qq4sdTvSNPKruWKfweTttJaHuNjTugrYLUi+S1nZ4=	2018-03-02 00:35:30.679272+05	t	t	998389478	azam.mamatmurodov@gmail.com	A'zam	Mamatmurodov	2018-02-14 01:24:32.11251+05	t	
3	pbkdf2_sha256$36000$zZ1POOYiN9cm$MmRm0Ti8P7zmmHwIIh3oGTdQXuvv+8IXENglAuO19Vs=	\N	f	f	998991111111	Polard@example.com	Polard	Polard	2018-03-02 00:48:40.791109+05	t	
4	pbkdf2_sha256$36000$cmVDwSWrOft2$dDTZO7VzHOkz2k4tFU1mhCmujVBWLiSPhXqFpS4mteE=	\N	f	f	991234567	Hayat@example.com	Hayat	Hayat	2018-03-02 00:49:27.367788+05	t	
\.


--
-- Data for Name: users_user_groups; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY users_user_groups (id, user_id, group_id) FROM stdin;
\.


--
-- Name: users_user_groups_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('users_user_groups_id_seq', 1, false);


--
-- Name: users_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('users_user_id_seq', 4, true);


--
-- Data for Name: users_user_user_permissions; Type: TABLE DATA; Schema: public; Owner: stroyshop
--

COPY users_user_user_permissions (id, user_id, permission_id) FROM stdin;
\.


--
-- Name: users_user_user_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: stroyshop
--

SELECT pg_catalog.setval('users_user_user_permissions_id_seq', 1, false);


--
-- Name: auth_group auth_group_name_key; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY auth_group
    ADD CONSTRAINT auth_group_name_key UNIQUE (name);


--
-- Name: auth_group_permissions auth_group_permissions_group_id_permission_id_0cd325b0_uniq; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_permission_id_0cd325b0_uniq UNIQUE (group_id, permission_id);


--
-- Name: auth_group_permissions auth_group_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_pkey PRIMARY KEY (id);


--
-- Name: auth_group auth_group_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY auth_group
    ADD CONSTRAINT auth_group_pkey PRIMARY KEY (id);


--
-- Name: auth_permission auth_permission_content_type_id_codename_01ab375a_uniq; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_codename_01ab375a_uniq UNIQUE (content_type_id, codename);


--
-- Name: auth_permission auth_permission_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY auth_permission
    ADD CONSTRAINT auth_permission_pkey PRIMARY KEY (id);


--
-- Name: django_admin_log django_admin_log_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY django_admin_log
    ADD CONSTRAINT django_admin_log_pkey PRIMARY KEY (id);


--
-- Name: django_content_type django_content_type_app_label_model_76bd3d3b_uniq; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY django_content_type
    ADD CONSTRAINT django_content_type_app_label_model_76bd3d3b_uniq UNIQUE (app_label, model);


--
-- Name: django_content_type django_content_type_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY django_content_type
    ADD CONSTRAINT django_content_type_pkey PRIMARY KEY (id);


--
-- Name: django_migrations django_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY django_migrations
    ADD CONSTRAINT django_migrations_pkey PRIMARY KEY (id);


--
-- Name: django_session django_session_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY django_session
    ADD CONSTRAINT django_session_pkey PRIMARY KEY (session_key);


--
-- Name: main_banner main_banner_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY main_banner
    ADD CONSTRAINT main_banner_pkey PRIMARY KEY (id);


--
-- Name: main_banner_translation main_banner_translation_language_code_master_id_ebf3668a_uniq; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY main_banner_translation
    ADD CONSTRAINT main_banner_translation_language_code_master_id_ebf3668a_uniq UNIQUE (language_code, master_id);


--
-- Name: main_banner_translation main_banner_translation_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY main_banner_translation
    ADD CONSTRAINT main_banner_translation_pkey PRIMARY KEY (id);


--
-- Name: main_menu main_menu_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY main_menu
    ADD CONSTRAINT main_menu_pkey PRIMARY KEY (id);


--
-- Name: main_menu_translation main_menu_translation_language_code_master_id_a87e80af_uniq; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY main_menu_translation
    ADD CONSTRAINT main_menu_translation_language_code_master_id_a87e80af_uniq UNIQUE (language_code, master_id);


--
-- Name: main_menu_translation main_menu_translation_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY main_menu_translation
    ADD CONSTRAINT main_menu_translation_pkey PRIMARY KEY (id);


--
-- Name: main_static main_static_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY main_static
    ADD CONSTRAINT main_static_pkey PRIMARY KEY (id);


--
-- Name: main_static_translation main_static_translation_language_code_master_id_f27431bb_uniq; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY main_static_translation
    ADD CONSTRAINT main_static_translation_language_code_master_id_f27431bb_uniq UNIQUE (language_code, master_id);


--
-- Name: main_static_translation main_static_translation_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY main_static_translation
    ADD CONSTRAINT main_static_translation_pkey PRIMARY KEY (id);


--
-- Name: products_brands products_brands_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY products_brands
    ADD CONSTRAINT products_brands_pkey PRIMARY KEY (id);


--
-- Name: products_category products_category_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY products_category
    ADD CONSTRAINT products_category_pkey PRIMARY KEY (id);


--
-- Name: products_category_translation products_category_transl_language_code_master_id_03d12f31_uniq; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY products_category_translation
    ADD CONSTRAINT products_category_transl_language_code_master_id_03d12f31_uniq UNIQUE (language_code, master_id);


--
-- Name: products_category_translation products_category_translation_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY products_category_translation
    ADD CONSTRAINT products_category_translation_pkey PRIMARY KEY (id);


--
-- Name: products_color_translation products_color_translati_language_code_master_id_3b02aa43_uniq; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY products_color_translation
    ADD CONSTRAINT products_color_translati_language_code_master_id_3b02aa43_uniq UNIQUE (language_code, master_id);


--
-- Name: products_color_translation products_color_translation_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY products_color_translation
    ADD CONSTRAINT products_color_translation_pkey PRIMARY KEY (id);


--
-- Name: products_product products_product_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY products_product
    ADD CONSTRAINT products_product_pkey PRIMARY KEY (id);


--
-- Name: products_color products_productcolor_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY products_color
    ADD CONSTRAINT products_productcolor_pkey PRIMARY KEY (id);


--
-- Name: products_productimage products_productimage_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY products_productimage
    ADD CONSTRAINT products_productimage_pkey PRIMARY KEY (id);


--
-- Name: products_review products_review_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY products_review
    ADD CONSTRAINT products_review_pkey PRIMARY KEY (id);


--
-- Name: products_variation products_variation_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY products_variation
    ADD CONSTRAINT products_variation_pkey PRIMARY KEY (id);


--
-- Name: products_volumetype products_volumetype_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY products_volumetype
    ADD CONSTRAINT products_volumetype_pkey PRIMARY KEY (id);


--
-- Name: products_volumetype_translation products_volumetype_tran_language_code_master_id_fb95d2c8_uniq; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY products_volumetype_translation
    ADD CONSTRAINT products_volumetype_tran_language_code_master_id_fb95d2c8_uniq UNIQUE (language_code, master_id);


--
-- Name: products_volumetype_translation products_volumetype_translation_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY products_volumetype_translation
    ADD CONSTRAINT products_volumetype_translation_pkey PRIMARY KEY (id);


--
-- Name: users_client users_client_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY users_client
    ADD CONSTRAINT users_client_pkey PRIMARY KEY (id);


--
-- Name: users_client users_client_user_id_key; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY users_client
    ADD CONSTRAINT users_client_user_id_key UNIQUE (user_id);


--
-- Name: users_merchant users_merchant_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY users_merchant
    ADD CONSTRAINT users_merchant_pkey PRIMARY KEY (id);


--
-- Name: users_merchant users_merchant_user_id_key; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY users_merchant
    ADD CONSTRAINT users_merchant_user_id_key UNIQUE (user_id);


--
-- Name: users_user users_user_email_key; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY users_user
    ADD CONSTRAINT users_user_email_key UNIQUE (email);


--
-- Name: users_user_groups users_user_groups_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY users_user_groups
    ADD CONSTRAINT users_user_groups_pkey PRIMARY KEY (id);


--
-- Name: users_user_groups users_user_groups_user_id_group_id_b88eab82_uniq; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY users_user_groups
    ADD CONSTRAINT users_user_groups_user_id_group_id_b88eab82_uniq UNIQUE (user_id, group_id);


--
-- Name: users_user users_user_phone_fe37f55c_uniq; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY users_user
    ADD CONSTRAINT users_user_phone_fe37f55c_uniq UNIQUE (phone);


--
-- Name: users_user users_user_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY users_user
    ADD CONSTRAINT users_user_pkey PRIMARY KEY (id);


--
-- Name: users_user_user_permissions users_user_user_permissions_pkey; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY users_user_user_permissions
    ADD CONSTRAINT users_user_user_permissions_pkey PRIMARY KEY (id);


--
-- Name: users_user_user_permissions users_user_user_permissions_user_id_permission_id_43338c45_uniq; Type: CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY users_user_user_permissions
    ADD CONSTRAINT users_user_user_permissions_user_id_permission_id_43338c45_uniq UNIQUE (user_id, permission_id);


--
-- Name: auth_group_name_a6ea08ec_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX auth_group_name_a6ea08ec_like ON auth_group USING btree (name varchar_pattern_ops);


--
-- Name: auth_group_permissions_group_id_b120cbf9; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX auth_group_permissions_group_id_b120cbf9 ON auth_group_permissions USING btree (group_id);


--
-- Name: auth_group_permissions_permission_id_84c5c92e; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX auth_group_permissions_permission_id_84c5c92e ON auth_group_permissions USING btree (permission_id);


--
-- Name: auth_permission_content_type_id_2f476e4b; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX auth_permission_content_type_id_2f476e4b ON auth_permission USING btree (content_type_id);


--
-- Name: django_admin_log_content_type_id_c4bce8eb; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX django_admin_log_content_type_id_c4bce8eb ON django_admin_log USING btree (content_type_id);


--
-- Name: django_admin_log_user_id_c564eba6; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX django_admin_log_user_id_c564eba6 ON django_admin_log USING btree (user_id);


--
-- Name: django_session_expire_date_a5c62663; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX django_session_expire_date_a5c62663 ON django_session USING btree (expire_date);


--
-- Name: django_session_session_key_c0390e0f_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX django_session_session_key_c0390e0f_like ON django_session USING btree (session_key varchar_pattern_ops);


--
-- Name: main_banner_translation_language_code_18439eee; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_banner_translation_language_code_18439eee ON main_banner_translation USING btree (language_code);


--
-- Name: main_banner_translation_language_code_18439eee_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_banner_translation_language_code_18439eee_like ON main_banner_translation USING btree (language_code varchar_pattern_ops);


--
-- Name: main_banner_translation_master_id_f62e61c4; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_banner_translation_master_id_f62e61c4 ON main_banner_translation USING btree (master_id);


--
-- Name: main_banner_translation_slug_f62a4547; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_banner_translation_slug_f62a4547 ON main_banner_translation USING btree (slug);


--
-- Name: main_banner_translation_slug_f62a4547_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_banner_translation_slug_f62a4547_like ON main_banner_translation USING btree (slug varchar_pattern_ops);


--
-- Name: main_menu_translation_language_code_b760b451; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_menu_translation_language_code_b760b451 ON main_menu_translation USING btree (language_code);


--
-- Name: main_menu_translation_language_code_b760b451_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_menu_translation_language_code_b760b451_like ON main_menu_translation USING btree (language_code varchar_pattern_ops);


--
-- Name: main_menu_translation_master_id_6cb98964; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_menu_translation_master_id_6cb98964 ON main_menu_translation USING btree (master_id);


--
-- Name: main_menu_translation_slug_155a9128; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_menu_translation_slug_155a9128 ON main_menu_translation USING btree (slug);


--
-- Name: main_menu_translation_slug_155a9128_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_menu_translation_slug_155a9128_like ON main_menu_translation USING btree (slug varchar_pattern_ops);


--
-- Name: main_static_translation_language_code_a7e35ca0; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_static_translation_language_code_a7e35ca0 ON main_static_translation USING btree (language_code);


--
-- Name: main_static_translation_language_code_a7e35ca0_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_static_translation_language_code_a7e35ca0_like ON main_static_translation USING btree (language_code varchar_pattern_ops);


--
-- Name: main_static_translation_master_id_6c9d2d70; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_static_translation_master_id_6c9d2d70 ON main_static_translation USING btree (master_id);


--
-- Name: main_static_translation_slug_7864d7f2; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_static_translation_slug_7864d7f2 ON main_static_translation USING btree (slug);


--
-- Name: main_static_translation_slug_7864d7f2_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX main_static_translation_slug_7864d7f2_like ON main_static_translation USING btree (slug varchar_pattern_ops);


--
-- Name: products_brands_category_id_90ebd3a5; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_brands_category_id_90ebd3a5 ON products_brands USING btree (category_id);


--
-- Name: products_category_level_999bd550; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_category_level_999bd550 ON products_category USING btree (mptt_level);


--
-- Name: products_category_lft_b068de9d; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_category_lft_b068de9d ON products_category USING btree (lft);


--
-- Name: products_category_parent_id_3388f6c9; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_category_parent_id_3388f6c9 ON products_category USING btree (parent_id);


--
-- Name: products_category_rght_c5971abd; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_category_rght_c5971abd ON products_category USING btree (rght);


--
-- Name: products_category_translation_language_code_ddf7527e; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_category_translation_language_code_ddf7527e ON products_category_translation USING btree (language_code);


--
-- Name: products_category_translation_language_code_ddf7527e_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_category_translation_language_code_ddf7527e_like ON products_category_translation USING btree (language_code varchar_pattern_ops);


--
-- Name: products_category_translation_master_id_f53287e3; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_category_translation_master_id_f53287e3 ON products_category_translation USING btree (master_id);


--
-- Name: products_category_translation_slug_d9e2774a; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_category_translation_slug_d9e2774a ON products_category_translation USING btree (slug);


--
-- Name: products_category_translation_slug_d9e2774a_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_category_translation_slug_d9e2774a_like ON products_category_translation USING btree (slug varchar_pattern_ops);


--
-- Name: products_category_tree_id_7d9b3ae8; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_category_tree_id_7d9b3ae8 ON products_category USING btree (tree_id);


--
-- Name: products_color_translation_language_code_f0d74222; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_color_translation_language_code_f0d74222 ON products_color_translation USING btree (language_code);


--
-- Name: products_color_translation_language_code_f0d74222_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_color_translation_language_code_f0d74222_like ON products_color_translation USING btree (language_code varchar_pattern_ops);


--
-- Name: products_color_translation_master_id_3e7ac7bb; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_color_translation_master_id_3e7ac7bb ON products_color_translation USING btree (master_id);


--
-- Name: products_product_brand_id_3e2e8fd1; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_product_brand_id_3e2e8fd1 ON products_product USING btree (brand_id);


--
-- Name: products_product_category_id_9b594869; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_product_category_id_9b594869 ON products_product USING btree (category_id);


--
-- Name: products_product_owner_id_f189d068; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_product_owner_id_f189d068 ON products_product USING btree (owner_id);


--
-- Name: products_product_volume_id_9a242362; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_product_volume_id_9a242362 ON products_product USING btree (volume_id);


--
-- Name: products_productimage_product_id_e747596a; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_productimage_product_id_e747596a ON products_productimage USING btree (product_id);


--
-- Name: products_review_product_id_d933ffa7; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_review_product_id_d933ffa7 ON products_review USING btree (product_id);


--
-- Name: products_variation_color_id_67e0ff3a; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_variation_color_id_67e0ff3a ON products_variation USING btree (color_id);


--
-- Name: products_variation_product_id_58e457dc; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_variation_product_id_58e457dc ON products_variation USING btree (product_id);


--
-- Name: products_volumetype_translation_language_code_1d9b9128; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_volumetype_translation_language_code_1d9b9128 ON products_volumetype_translation USING btree (language_code);


--
-- Name: products_volumetype_translation_language_code_1d9b9128_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_volumetype_translation_language_code_1d9b9128_like ON products_volumetype_translation USING btree (language_code varchar_pattern_ops);


--
-- Name: products_volumetype_translation_master_id_f5e4ae1f; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX products_volumetype_translation_master_id_f5e4ae1f ON products_volumetype_translation USING btree (master_id);


--
-- Name: users_user_email_243f6e77_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX users_user_email_243f6e77_like ON users_user USING btree (email varchar_pattern_ops);


--
-- Name: users_user_groups_group_id_9afc8d0e; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX users_user_groups_group_id_9afc8d0e ON users_user_groups USING btree (group_id);


--
-- Name: users_user_groups_user_id_5f6f5a90; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX users_user_groups_user_id_5f6f5a90 ON users_user_groups USING btree (user_id);


--
-- Name: users_user_phone_fe37f55c_like; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX users_user_phone_fe37f55c_like ON users_user USING btree (phone varchar_pattern_ops);


--
-- Name: users_user_user_permissions_permission_id_0b93982e; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX users_user_user_permissions_permission_id_0b93982e ON users_user_user_permissions USING btree (permission_id);


--
-- Name: users_user_user_permissions_user_id_20aca447; Type: INDEX; Schema: public; Owner: stroyshop
--

CREATE INDEX users_user_user_permissions_user_id_20aca447 ON users_user_user_permissions USING btree (user_id);


--
-- Name: auth_group_permissions auth_group_permissio_permission_id_84c5c92e_fk_auth_perm; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY auth_group_permissions
    ADD CONSTRAINT auth_group_permissio_permission_id_84c5c92e_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_group_permissions auth_group_permissions_group_id_b120cbf9_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY auth_group_permissions
    ADD CONSTRAINT auth_group_permissions_group_id_b120cbf9_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: auth_permission auth_permission_content_type_id_2f476e4b_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY auth_permission
    ADD CONSTRAINT auth_permission_content_type_id_2f476e4b_fk_django_co FOREIGN KEY (content_type_id) REFERENCES django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_admin_log django_admin_log_content_type_id_c4bce8eb_fk_django_co; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY django_admin_log
    ADD CONSTRAINT django_admin_log_content_type_id_c4bce8eb_fk_django_co FOREIGN KEY (content_type_id) REFERENCES django_content_type(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: django_admin_log django_admin_log_user_id_c564eba6_fk_users_user_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY django_admin_log
    ADD CONSTRAINT django_admin_log_user_id_c564eba6_fk_users_user_id FOREIGN KEY (user_id) REFERENCES users_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: main_banner_translation main_banner_translation_master_id_f62e61c4_fk_main_banner_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY main_banner_translation
    ADD CONSTRAINT main_banner_translation_master_id_f62e61c4_fk_main_banner_id FOREIGN KEY (master_id) REFERENCES main_banner(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: main_menu_translation main_menu_translation_master_id_6cb98964_fk_main_menu_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY main_menu_translation
    ADD CONSTRAINT main_menu_translation_master_id_6cb98964_fk_main_menu_id FOREIGN KEY (master_id) REFERENCES main_menu(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: main_static_translation main_static_translation_master_id_6c9d2d70_fk_main_static_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY main_static_translation
    ADD CONSTRAINT main_static_translation_master_id_6c9d2d70_fk_main_static_id FOREIGN KEY (master_id) REFERENCES main_static(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_brands products_brands_category_id_90ebd3a5_fk_products_category_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY products_brands
    ADD CONSTRAINT products_brands_category_id_90ebd3a5_fk_products_category_id FOREIGN KEY (category_id) REFERENCES products_category(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_category products_category_parent_id_3388f6c9_fk_products_category_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY products_category
    ADD CONSTRAINT products_category_parent_id_3388f6c9_fk_products_category_id FOREIGN KEY (parent_id) REFERENCES products_category(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_category_translation products_category_tr_master_id_f53287e3_fk_products_; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY products_category_translation
    ADD CONSTRAINT products_category_tr_master_id_f53287e3_fk_products_ FOREIGN KEY (master_id) REFERENCES products_category(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_color_translation products_color_trans_master_id_3e7ac7bb_fk_products_; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY products_color_translation
    ADD CONSTRAINT products_color_trans_master_id_3e7ac7bb_fk_products_ FOREIGN KEY (master_id) REFERENCES products_color(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_product products_product_brand_id_3e2e8fd1_fk_products_brands_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY products_product
    ADD CONSTRAINT products_product_brand_id_3e2e8fd1_fk_products_brands_id FOREIGN KEY (brand_id) REFERENCES products_brands(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_product products_product_category_id_9b594869_fk_products_category_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY products_product
    ADD CONSTRAINT products_product_category_id_9b594869_fk_products_category_id FOREIGN KEY (category_id) REFERENCES products_category(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_product products_product_owner_id_f189d068_fk_users_user_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY products_product
    ADD CONSTRAINT products_product_owner_id_f189d068_fk_users_user_id FOREIGN KEY (owner_id) REFERENCES users_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_product products_product_volume_id_9a242362_fk_products_volumetype_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY products_product
    ADD CONSTRAINT products_product_volume_id_9a242362_fk_products_volumetype_id FOREIGN KEY (volume_id) REFERENCES products_volumetype(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_productimage products_productimag_product_id_e747596a_fk_products_; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY products_productimage
    ADD CONSTRAINT products_productimag_product_id_e747596a_fk_products_ FOREIGN KEY (product_id) REFERENCES products_product(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_review products_review_product_id_d933ffa7_fk_products_product_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY products_review
    ADD CONSTRAINT products_review_product_id_d933ffa7_fk_products_product_id FOREIGN KEY (product_id) REFERENCES products_product(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_variation products_variation_color_id_67e0ff3a_fk_products_color_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY products_variation
    ADD CONSTRAINT products_variation_color_id_67e0ff3a_fk_products_color_id FOREIGN KEY (color_id) REFERENCES products_color(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_variation products_variation_product_id_58e457dc_fk_products_product_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY products_variation
    ADD CONSTRAINT products_variation_product_id_58e457dc_fk_products_product_id FOREIGN KEY (product_id) REFERENCES products_product(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: products_volumetype_translation products_volumetype__master_id_f5e4ae1f_fk_products_; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY products_volumetype_translation
    ADD CONSTRAINT products_volumetype__master_id_f5e4ae1f_fk_products_ FOREIGN KEY (master_id) REFERENCES products_volumetype(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: users_client users_client_user_id_06d1c832_fk_users_user_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY users_client
    ADD CONSTRAINT users_client_user_id_06d1c832_fk_users_user_id FOREIGN KEY (user_id) REFERENCES users_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: users_merchant users_merchant_user_id_30e64459_fk_users_user_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY users_merchant
    ADD CONSTRAINT users_merchant_user_id_30e64459_fk_users_user_id FOREIGN KEY (user_id) REFERENCES users_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: users_user_groups users_user_groups_group_id_9afc8d0e_fk_auth_group_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY users_user_groups
    ADD CONSTRAINT users_user_groups_group_id_9afc8d0e_fk_auth_group_id FOREIGN KEY (group_id) REFERENCES auth_group(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: users_user_groups users_user_groups_user_id_5f6f5a90_fk_users_user_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY users_user_groups
    ADD CONSTRAINT users_user_groups_user_id_5f6f5a90_fk_users_user_id FOREIGN KEY (user_id) REFERENCES users_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: users_user_user_permissions users_user_user_perm_permission_id_0b93982e_fk_auth_perm; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY users_user_user_permissions
    ADD CONSTRAINT users_user_user_perm_permission_id_0b93982e_fk_auth_perm FOREIGN KEY (permission_id) REFERENCES auth_permission(id) DEFERRABLE INITIALLY DEFERRED;


--
-- Name: users_user_user_permissions users_user_user_permissions_user_id_20aca447_fk_users_user_id; Type: FK CONSTRAINT; Schema: public; Owner: stroyshop
--

ALTER TABLE ONLY users_user_user_permissions
    ADD CONSTRAINT users_user_user_permissions_user_id_20aca447_fk_users_user_id FOREIGN KEY (user_id) REFERENCES users_user(id) DEFERRABLE INITIALLY DEFERRED;


--
-- PostgreSQL database dump complete
--

